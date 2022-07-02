import React, { useState } from "react";
// Import Components
import BookingHistoryTableHeader from "./bookingHistoryTableHeader";
import BookingHistoryTableBody from "./bookingHistoryTableBody";
import BookingHistoryTableFooter from "./bookingHistoryTableFooter";
// Import Third Party Packages
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";

function BookingHistoryTable(props) {
  const { header, body } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  return (
    <TableContainer>
      <Table>
        <BookingHistoryTableHeader header={header} />
        <BookingHistoryTableBody
          body={body}
          page={page}
          rowsPerPage={rowsPerPage}
        />
        <BookingHistoryTableFooter
          body={body}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
        />
      </Table>
    </TableContainer>
  );
}

export default BookingHistoryTable;
