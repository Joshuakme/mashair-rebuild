import React, { useEffect, useState } from "react";
// Impor Components
import ChatMessageCard from "../../ui/chatroom/chatMsgCard";
import MsgInput from "./msgInput";
// Import Styles
import classes from "./contentContainer.module.css";

function ContentContainer({ messages, type }) {
  const self = { username: "Joshua Koh" };

  if (!messages) {
    return;
  }

  // for (let i = 0; i < messages.length; i++) {
  //   let prevIndex = i - 1;
  //   let nextIndex = i + 1;

  //   if (i === 0) {
  //     msgGroup.push([messages[i]]);
  //   } else if (i === messages.length - 1) {
  //     // console.log(messages[i].username === messages[prevIndex].username);
  //     if (messages[i].username === messages[prevIndex].username) {
  //       msgGroup.push(messages[i]);
  //       groupMsgList.push(msgGroup);
  //       msgGroup = [];
  //     }
  //   } else {
  //     if (messages[i].username === messages[prevIndex].username) {
  //       msgGroup.push(messages[i]);
  //     } else {
  //       groupMsgList.push(msgGroup);
  //       msgGroup = [];
  //       msgGroup.push(messages[i]);
  //     }
  //   }
  // }

  return (
    <div className={classes.chatContentContainer}>
      <div className={classes.messagesDisplayContainer}>
        {messages.map((message, index) => (
          <div className={classes.message}>
            <ChatMessageCard
              message={message}
              self={self}
              type={type}
              key={index}
            />
          </div>
        ))}
      </div>

      <footer className={classes.messageInputContainer}>
        <MsgInput />
      </footer>
    </div>
  );
}

export default ContentContainer;
