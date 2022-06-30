import React, { useEffect, useState } from "react";
// Impor Components

// Import Styles
import classes from "./chatMsgGroup.module.css";

function ChatMsgGroup({ msgGroup, type, self }) {
  useEffect(() => {
    if (msgGroup[0].username !== "") {
      if (msgGroup[0].username === self.username) {
        setIsSelf(true);
      }
    }
  }, []);

  return <div className={classes.messageGroup}></div>;
}

export default ChatMsgGroup;
