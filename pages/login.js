// Import Next & React Components
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
// Import Components
import LoginForm from "../components/auth/loginForm";
// Import Third Party Packages
import { useSession } from "next-auth/react";
// Import Styles
import classes from "../styles/login.module.css";

function Login() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && status === "authenticated") {
      router.push("/");
    }
  }, [session]);

  return (
    <section className={classes.loginSection}>
      <Head>
        <title>Login</title>
      </Head>

      <LoginForm />
    </section>
  );
}

export default Login;
