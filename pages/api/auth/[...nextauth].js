import NextAuth from "next-auth";
import { getToken } from "next-auth/jwt";
// Providers
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";
// Import  Helper Functions
import { verifyPassword } from "../../../lib/auth.-util";
import { connectMongoDB, checkExistingUser } from "../../../lib/mongodb-util";

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        if (!credentials) {
          return null;
        }

        const { email, password } = credentials;

        // Connect Database
        let client;
        try {
          client = await connectMongoDB();
        } catch (err) {
          client.close();
          return null;
        }

        const db = client.db();

        let user;
        try {
          user = await checkExistingUser(db, email);
        } catch (err) {
          console.log(err);
          client.close();
          return null;
        }

        if (!user) {
          // throw new Error("No user found!");
          throw new Error("未找到用戶!");
          client.close();
        }

        console.log(user);

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) {
          // throw new Error("Invalid Email Address or Password!");
          throw new Error("賬號或密碼無效!");
          client.close();
        }

        client.close();
        return {
          id: user.id,
          role: user.type,
        };
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    maxAge: 60 * 60 * 24 * 30,
  },
  callbacks: {
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.userId = user.id;
        token.userRole = user.role;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.user.id = token.userId;
      session.user.role = token.userRole;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/signout",
  },
});
