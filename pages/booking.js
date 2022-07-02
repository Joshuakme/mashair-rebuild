// Import Next & React Components
import React, { useEffect } from "react";
import { useRouter } from "next/router";
// Import Components
import BookingForm from "../components/booking/bookingForm/bookingForm";
import BookingHistory from "../components/booking/bookinghistory/bookinghistory";
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
      if (session.role !== "customer") {
        router.push("/");
      }
    }
  }, [session]);

  return (
    <main className={classes.bookingContainer}>
      <BookingHistory />
      <BookingForm />
    </main>
  );
}

export default Booking;
