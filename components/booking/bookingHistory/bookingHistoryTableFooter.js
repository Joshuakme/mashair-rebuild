import React, { useState } from "react";
// Import Third Party Packages
import TableFooter from "@mui/material/TableFooter";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";

function BookingHistoryTableFooter(props) {
  const { body, page, setPage, rowsPerPage } = props;

  //   Functions

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };

  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          count={body.length}
          page={page}
          rowsPerPage={5}
          rowsPerPageOptions={[]}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{
            borderTop: "1px solid rgb(81,81,81)",
            borderBottom: "2px solid rgb(81,81,81)",
          }}
        />
      </TableRow>
    </TableFooter>
  );
}

export default BookingHistoryTableFooter;
