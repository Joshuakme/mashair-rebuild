import React from "react";
// Import Third Party Packages
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function BookingHistoryTableBody(props) {
  const { body, page, rowsPerPage } = props;

  if (!body) {
    return;
  }
  const rows = body.sort((a, b) => (a.datetime < b.datetime ? -1 : 1));
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - body.length) : 0;

  //   Functions
  function formatDate(datetime) {
    const dateTime = new Date(datetime);

    return `${dateTime.getFullYear()}-${addLeadingZeros(
      dateTime.getMonth() + 1,
      2
    )}-${dateTime.getDate()}`;
  }

  function formatTime(datetime) {
    const dateTime = new Date(datetime);

    return `${addLeadingZeros(dateTime.getHours(), 2)}:${addLeadingZeros(
      dateTime.getMinutes(),
      2
    )} ${determineTimeAmPm(dateTime.getHours())}`;
  }

  function formatMonthInWord(month) {
    const monthInWord = [
      "January",
      "February",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return monthInWord[month];
  }

  function addLeadingZeros(num, totalLength) {
    return num > 0 && num < 10 ? String(num).padStart(totalLength, "0") : num;
  }

  function determineTimeAmPm(hours) {
    if (hours >= 0 && hours <= 12) {
      return "AM";
    } else {
      return "PM";
    }
  }

  return (
    <TableBody>
      {(rowsPerPage > 0
        ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        : rows
      ).map((row, index) => (
        <StyledTableRow
          key={index}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <StyledTableCell component="th" scope="row" align="center">
            {index + 1}.
          </StyledTableCell>
          <StyledTableCell align="left">{row.seller}</StyledTableCell>
          <StyledTableCell align="center">{row.service}</StyledTableCell>
          <StyledTableCell align="center">{row.price}</StyledTableCell>
          <StyledTableCell align="center">
            {formatDate(row.datetime)}
          </StyledTableCell>
          <StyledTableCell align="center">
            {formatTime(row.datetime)}
          </StyledTableCell>
        </StyledTableRow>
      ))}
      {emptyRows > 0 && (
        <StyledTableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </StyledTableRow>
      )}
    </TableBody>
  );
}

export default BookingHistoryTableBody;
