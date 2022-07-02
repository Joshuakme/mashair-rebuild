import React from "react";
// Import Components
import BookingForm from "../components/booking/bookingForm/bookingForm";
import BookingHistory from "../components/booking/bookinghistory";
// Import Styles
import classes from "../styles/booking.module.css";

function Booking() {
  return (
    <main className={classes.bookingContainer}>
      <BookingHistory />
      <BookingForm />
    </main>
  );
}

export default Booking;
