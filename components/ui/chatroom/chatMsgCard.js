import React, { useState, useRef, useEffect } from "react";
// Import Styles
import classes from "./chatMsgCard.module.css";

function ChatMessageCard(props) {
  const { message, self, type } = props;
  const msgCardContainer = useRef();

  const msgDate = new Date(message.sentDate);
  const formattedHours = addLeadingZeros(msgDate.getHours(), 2);
  const formattedMinutes = addLeadingZeros(msgDate.getMinutes(), 2);
  const displayTime = `${formattedHours}:${formattedMinutes}`;

  useEffect(() => {
    if (message.username === self.username) {
      msgCardContainer.current.dataset["self"] = "true";
    }
  }, [message.username, self.username]);

  //   Functions
  function addLeadingZeros(num, totalLength) {
    return num > 0 && num < 10 ? String(num).padStart(totalLength, "0") : num;
  }

  if (!message) {
    return;
  }

  return (
    <div
      className={classes.msgCardContainer}
      id="chat-msg-container"
      data-self={false}
      ref={msgCardContainer}
    >
      <div className={classes.cardHeader}>
        {type === "group" ? <h2>{message.username}</h2> : <></>}
      </div>

      <div className={classes.cardContent}>
        {message.content}
        <span>{displayTime}</span>
      </div>
    </div>
  );
}

export default ChatMessageCard;
