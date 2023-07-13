// Import Next & React Components
import Head from "next/head";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
// Import Components
import BookingForm from "../components/booking/bookingForm/bookingForm";
import BookingHistory from "../components/booking/bookingHistory/bookingHistory";
// Import Third Party Packages
import { useSession } from "next-auth/react";
// Import Styles
import classes from "../styles/booking.module.css";

function Booking() {
  // Sessions
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session || status === "unauthenticated") {
      router.push("/");
    } else {
      if (session.user.role !== "customer") {
        router.push("/login");
      }
    }
  }, [router, session, status]);

  return (
    <main className={classes.bookingContainer}>
      <Head>
        <title>Booking</title>
      </Head>
      <BookingHistory />
      <BookingForm />
    </main>
  );
}

export default Booking;
