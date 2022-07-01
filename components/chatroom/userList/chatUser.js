// Import Next & React Components
import Image from "next/image";
import React from "react";
// Import Third Party Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// Import Styles
import classes from "./chatUser.module.css";

function ChatUser(props) {
  const { activeChatHandler } = props;
  const { messages, thumbnail_img, title, id } = props.chat;
  let imgPath;

  if (!thumbnail_img || thumbnail_img === "") {
    imgPath = `/images/user/user-skeleton.png`;
  } else {
    imgPath = `/images/chatroom/${id}/${thumbnail_img}`;
  }

  const lastMsg = messages[messages.length - 1].content;

  const ModlastMsg = truncate(lastMsg, 55);

  // Functions
  function truncate(source, size) {
    return source.length > size ? source.slice(0, size - 1) + "..." : source;
  }

  return (
    <div
      className={classes.chatUserContainer}
      onClick={activeChatHandler}
      id={id}
    >
      <div className={classes.imgContainer}>
        <Image src={imgPath} width={100} height={100} />
      </div>
      <div className={classes.summaryContainer}>
        <h2>{title}</h2>
        <p>{ModlastMsg}</p>
      </div>
    </div>
  );
}

export default ChatUser;
