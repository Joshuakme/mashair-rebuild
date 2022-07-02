import React from "react";
// Import Third Party Packages
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

function BookingHistoryTableHeader({ header }) {
  return (
    <TableHead>
      <TableRow>
        {header.map((item, index) => {
          if (index === 1) {
            return (
              <TableCell
                align="left"
                style={{
                  fontWeight: "600",
                  borderTop: "2px solid rgb(81,81,81)",
                }}
                key={item}
              >
                {item}
              </TableCell>
            );
          } else {
            return (
              <TableCell
                align="center"
                style={{
                  fontWeight: "600",
                  borderTop: "2px solid rgb(81,81,81)",
                }}
                key={item}
              >
                {item}
              </TableCell>
            );
          }
        })}
      </TableRow>
    </TableHead>
  );
}

export default BookingHistoryTableHeader;
