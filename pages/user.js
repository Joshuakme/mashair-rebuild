import React, { useState } from "react";
// Import Third Party Packages
import { useSession } from "next-auth/react";
// Import Components
import ProfileHeader from "../components/user/profileHeader";
import ProfileBody from "../components/user/profileBody";
import { useRouter } from "next/router";
// Import Styles
import classes from "../styles/user.module.css";

function User() {
  const { data: session, status } = useSession();
  const router = useRouter();

  //   Variables
  let userRole;

  console.log(session);

  if (!session && status === "loading") {
    <p>Loading...</p>;
  }

  if (!session && status !== "authenticated") {
    return;
    router.push("/");
  }

  //   If user = customer
  if (session) {
    userRole = session.user.role;
  } else {
    return <p>Loading</p>;
  }

  //   If user = seller

  return (
    <main className={classes.container}>
      <ProfileHeader />
      <ProfileBody user={session.user} />
    </main>
  );
}

export default User;
