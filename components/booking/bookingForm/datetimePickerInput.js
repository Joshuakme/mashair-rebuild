import React, { useState } from "react";
// Import Third Party Packages
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// Import Styles
import classes from "./datetimePickerInput.module.css";

function DatetimePickerInput(props) {
  const { bookingFormInputs, setBookingFormInputs, formInputHandler } = props;

  function datePickerHandler(newValue) {
    const e = {
      target: {
        name: "datetime",
        value: newValue,
      },
    };
    formInputHandler(e);
  }

  function timePickerHandler(newValue) {
    const e = {
      target: {
        name: "time",
        value: newValue,
      },
    };
    formInputHandler(e);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={classes.datetimePickerContainer}>
        <DateTimePicker
          value={bookingFormInputs.datetime}
          label="Date Time"
          disablePast
          onChange={datePickerHandler}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </LocalizationProvider>
  );
}

export default DatetimePickerInput;
