import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
// Import Components
import ContentContainer from "./contentContainer";
// Import Styles
import classes from "./messageBox.module.css";

function MessageBox(props) {
  const { activeChat, setActiveChat, object } = props;
  let filteredChat;
  const [isOnline, setIsOnline] = useState(true);
  const messageBox = useRef(null);

  const list = Object.keys(object).map((key) => object[key]);

  useEffect(() => {
    getUserListContainerWidth();
  }, [activeChat]);

  if (typeof activeChat !== undefined || activeChat !== null || !list) {
    filteredChat = list.filter((chat) => {
      return parseInt(chat.id.toString().slice(6)) === activeChat;
    });
  }

  if (
    typeof filteredChat === undefined ||
    filteredChat === null ||
    filteredChat === []
  ) {
    return <p>Loading</p>;
  }

  let imgPath;

  if (filteredChat.length > 0 && filteredChat[0].thumbnail_img !== "") {
    imgPath = `/images/chatroom/${filteredChat[0].id}/${filteredChat[0].thumbnail_img}`;
  } else {
    imgPath = `/images/user/user-skeleton.png`;
  }

  function getUserListContainerWidth() {
    const userListContainer = document.getElementById("userListContainer");

    const containerWidth = userListContainer.offsetWidth;

    messageBox.current.style.setProperty(
      "--user-list-container-width",
      `${containerWidth}px`
    );
  }

  if (filteredChat.length > 0) {
    return (
      <section className={classes.messageBoxContainer} ref={messageBox}>
        <div className={classes.header}>
          <div className={classes.imgContainer}>
            <Image src={imgPath} width={100} height={100} alt="profile" />
          </div>
          <div className={classes.userStatus}>
            <h2>{filteredChat[0].title}</h2>
            <span>{isOnline && "online"}</span>
          </div>
        </div>

        <ContentContainer
          messages={filteredChat[0].messages}
          type={filteredChat[0].type}
        />
      </section>
    );
  } else {
    return (
      <section
        className={classes.messageBoxContainer}
        ref={messageBox}
      ></section>
    );
  }
}

export default MessageBox;
