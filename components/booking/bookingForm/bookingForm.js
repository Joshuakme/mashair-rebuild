import React, { useState } from "react";
// Import Components
import ServicePickerInput from "./servicePickerInput";
import DatetimePickerInput from "./datetimePickerInput";
// Import Third Party Packages
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
// Import Styles
import classes from "./bookingForm.module.css";

function BookingForm() {
  const now = new Date();
  const initBookingForm = {
    service: "none",
    datetime: now.toString(),
  };
  const [bookingFormInputs, setBookingFormInputs] = useState(initBookingForm);

  let isButtonClickable =
    bookingFormInputs.service !== "none" &&
    bookingFormInputs.datetime !== now.toString();

  function formInputHandler(e) {
    const { name, value } = e.target;

    setBookingFormInputs({ ...bookingFormInputs, [name]: value });

    // bookingFormInputs
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form onSubmit={formSubmitHandler} className={classes.bookingForm}>
      <div className={classes.formHeader}>
        <h2>
          <span>Book</span> Service now
        </h2>
      </div>
      <div className={classes.formBody}>
        <div className={classes.formInputContainer}>
          <ServicePickerInput
            bookingFormInputs={bookingFormInputs}
            setBookingFormInputs={setBookingFormInputs}
            formInputHandler={formInputHandler}
          />
        </div>
        <div className={classes.formInputContainer}>
          <DatetimePickerInput
            bookingFormInputs={bookingFormInputs}
            setBookingFormInputs={setBookingFormInputs}
            formInputHandler={formInputHandler}
          />
        </div>
      </div>
      {isButtonClickable ? (
        <Button variant="contained">Book Now</Button>
      ) : (
        <Button variant="contained" disabled>
          Book Now
        </Button>
      )}
    </form>
  );
}

export default BookingForm;
