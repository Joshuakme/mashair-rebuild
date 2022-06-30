import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
// Import Third Party Packages
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

function SignOut() {
  const { data: session, status } = useSession();
  const router = useRouter();

  async function signOutHandler() {
    const data = await signOut({ callbackUrl: "/", redirect: false });

    // Push Notification (Signed Out Successfully)

    router.push(data.url);
  }

  useEffect(() => {
    if (!session || status !== "authenticated") {
      router.push("/");
    }
    signOutHandler();
  }, []);

  return <Fragment></Fragment>;
}

export default SignOut;
