import React from "react";
// Import Components
import BookingHistoryTable from "./bookingHistoryTable";
// Import Third Party Packages
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// Import Styles
import classes from "./bookingHistory.module.css";

function BookingHistory() {
  const historyHeader = {
    pending: ["No.", "Seller", "Service", "Price (RM)", "Date", "Time"],
    bill: ["No.", "Seller", "Service", "Price (RM)", "Date", "Time"],
  };
  const historyBody = {
    pending: [
      createData("John Wick", "Massage", 0, "1995-12-17T03:24:00"),
      createData("Leo Mullins", "Haircut", 10, "1997-01-17T13:24:00"),
      createData("Ryan Houston", "Beauty", 110, "2007-11-17T13:24:00"),
      createData("Roberta Hale", "Massage", 150, "2007-11-17T13:24:00"),
      createData("Faye Hanson", "Beauty", 210, "2007-11-17T13:24:00"),
      createData("Rodney Murray", "Haircut", 310, "2007-11-17T13:24:00"),
    ],
    booked: [
      createData("Joshua Koh", "Web Development", 350, "2022-10-04T13:05:00"),
    ],
    bill: [createData("John Wick", "Massage", 420, "2022-07-03T01:52:00")],
  };

  function createData(seller, service, price, datetime) {
    return { seller, service, price, datetime };
  }

  function tableAnimationHandler(e) {
    const { parentNode } = e.target;
    const isActive = parentNode.getAttribute("active") === "true";

    parentNode.setAttribute("active", `${!isActive}`);
  }

  return (
    <section className={classes.bookingHistoryContainer}>
      <div className={classes.historyContainer} id="pendingList" active="true">
        <div
          className={classes.historyContainerHeader}
          onClick={tableAnimationHandler}
        >
          <h2>Pending Appointment</h2>
          <ArrowBackIosNewIcon />
        </div>

        <BookingHistoryTable
          header={historyHeader.pending}
          body={historyBody.pending}
        />
      </div>
      <div className={classes.historyContainer} id="bookedList" active="false">
        <div
          className={classes.historyContainerHeader}
          onClick={tableAnimationHandler}
        >
          <h2>Booked Appointment</h2>
          <ArrowBackIosNewIcon />
        </div>
        <BookingHistoryTable
          header={historyHeader.pending}
          body={historyBody.booked}
        />
      </div>
      <div className={classes.historyContainer} id="billList" active="false">
        <div
          className={classes.historyContainerHeader}
          onClick={tableAnimationHandler}
        >
          <h2>Bill Records</h2>
          <ArrowBackIosNewIcon />
        </div>
        <BookingHistoryTable
          header={historyHeader.bill}
          body={historyBody.bill}
        />
      </div>
    </section>
  );
}

export default BookingHistory;
