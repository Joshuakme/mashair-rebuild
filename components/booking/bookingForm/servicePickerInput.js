import React from "react";
// Import Third Party Packages
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function ServicePickerInput(props) {
  const { bookingFormInputs, setBookingFormInputs, formInputHandler } = props;
  const serviceTypeList = [
    { id: 0, label: "Service", value: "none" },
    { id: 1, label: "Beauty", value: "beauty" },
    { id: 2, label: "Haircut", value: "haircut" },
    { id: 3, label: "Massage", value: "massage" },
  ];

  return (
    <Select
      id="service"
      labelId="service"
      name="service"
      autoFocus={true}
      value={bookingFormInputs.service}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      onChange={formInputHandler}
    >
      {serviceTypeList.map((service, index) => {
        if (index === 0) {
          return (
            <MenuItem value={service.value} disabled={true} key={service.id}>
              {service.label}
            </MenuItem>
          );
        } else {
          return (
            <MenuItem value={service.value} key={service.id}>
              {service.label}
            </MenuItem>
          );
        }
      })}
    </Select>
  );
}

export default ServicePickerInput;
