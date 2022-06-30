import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
// Import Styles
import classes from "./messageBox.module.css";

function MessageBox(props) {
  const { activeChat, setActiveChat } = props;
  const [filteredChat, setFilteredChat] = useState([]);
  const [isOnline, setIsOnline] = useState(true);
  const messageBox = useRef(null);

  const object = {
    chatId0: {
      id: "chatId0",
      messages: [
        {
          id: 0,
          username: "Joshua Koh",
          content: "Hello Next.js!",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 1,
          username: "Mashair Beauty",
          content: "Hi Joshua! Welcome to my website.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
      ],
      type: "private",
      thumbnail_img: "android-chrome-512x512.png",
      title: "Mashair Beauty",
    },
    chatId1: {
      id: "chatId1",
      messages: [
        {
          id: 0,
          username: "Joshua Koh",
          content: "Hello Next.js!",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 1,
          username: "Mashair Beauty",
          content: "Hi Joshua! Welcome to my website.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 2,
          username: "John Wick",
          content: "Hi Everyone! I'm John Wick.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
      ],
      type: "group",
      thumbnail_img: "group-thumbnail.png",
      title: "Mashair Developer Team",
    },
    chatId2: {
      id: "chatId2",
      messages: [
        {
          id: 0,
          username: "Joshua Koh",
          content: "Hello Next.js!",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 1,
          username: "Mashair Beauty",
          content: "Hi Joshua! Welcome to my website.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 2,
          username: "John Wick",
          content: "Hi Everyone! I'm John Wick.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
      ],
      type: "group",
      thumbnail_img: "",
      title: "Test User Default Icon",
    },
    chatId3: {
      id: "chatId3",
      messages: [
        {
          id: 0,
          username: "Joshua Koh",
          content: "Hello Next.js!",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 1,
          username: "Mashair Beauty",
          content: "Hi Joshua! Welcome to my website.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
      ],
      type: "private",
      thumbnail_img: "android-chrome-512x512.png",
      title: "Mashair Beauty",
    },
    chatId4: {
      id: "chatId4",
      messages: [
        {
          id: 0,
          username: "Joshua Koh",
          content: "Hello Next.js!",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 1,
          username: "Mashair Beauty",
          content: "Hi Joshua! Welcome to my website.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 2,
          username: "John Wick",
          content: "Hi Everyone! I'm John Wick.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
      ],
      type: "group",
      thumbnail_img: "group-thumbnail.png",
      title: "Mashair Developer Team",
    },
    chatId5: {
      id: "chatId5",
      messages: [
        {
          id: 0,
          username: "Joshua Koh",
          content: "Hello Next.js!",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 1,
          username: "Mashair Beauty",
          content: "Hi Joshua! Welcome to my website.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 2,
          username: "John Wick",
          content: "Hi Everyone! I'm John Wick.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
      ],
      type: "group",
      thumbnail_img: "",
      title: "Test User Default Icon",
    },
    chatId6: {
      id: "chatId6",
      messages: [
        {
          id: 0,
          username: "Joshua Koh",
          content: "Hello Next.js!",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 1,
          username: "Mashair Beauty",
          content: "Hi Joshua! Welcome to my website.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
      ],
      type: "private",
      thumbnail_img: "android-chrome-512x512.png",
      title: "Mashair Beauty",
    },
    chatId7: {
      id: "chatId7",
      messages: [
        {
          id: 0,
          username: "Joshua Koh",
          content: "Hello Next.js!",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 1,
          username: "Mashair Beauty",
          content: "Hi Joshua! Welcome to my website.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 2,
          username: "John Wick",
          content: "Hi Everyone! I'm John Wick.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
      ],
      type: "group",
      thumbnail_img: "group-thumbnail.png",
      title: "Mashair Developer Team",
    },
    chatId8: {
      id: "chatId8",
      messages: [
        {
          id: 0,
          username: "Joshua Koh",
          content: "Hello Next.js!",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 1,
          username: "Mashair Beauty",
          content: "Hi Joshua! Welcome to my website.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 2,
          username: "John Wick",
          content: "Hi Everyone! I'm John Wick.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
      ],
      type: "group",
      thumbnail_img: "",
      title: "Test User Default Icon",
    },
    chatId9: {
      id: "chatId9",
      messages: [
        {
          id: 0,
          username: "Joshua Koh",
          content: "Hello Next.js!",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 1,
          username: "Mashair Beauty",
          content: "Hi Joshua! Welcome to my website.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 2,
          username: "John Wick",
          content: "Hi Everyone! I'm John Wick.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
      ],
      type: "group",
      thumbnail_img: "",
      title: "Test User Default Icon",
    },
    chatId10: {
      id: "chatId10",
      messages: [
        {
          id: 0,
          username: "Joshua Koh",
          content: "Hello Next.js!",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 1,
          username: "Mashair Beauty",
          content: "Hi Joshua! Welcome to my website.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
      ],
      type: "private",
      thumbnail_img: "android-chrome-512x512.png",
      title: "Mashair Beauty",
    },
    chatId11: {
      id: "chatId11",
      messages: [
        {
          id: 0,
          username: "Joshua Koh",
          content: "Hello Next.js!",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 1,
          username: "Mashair Beauty",
          content: "Hi Joshua! Welcome to my website.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 2,
          username: "John Wick",
          content: "Hi Everyone! I'm John Wick.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
      ],
      type: "group",
      thumbnail_img: "group-thumbnail.png",
      title: "Mashair Developer Team",
    },
    chatId12: {
      id: "chatId12",
      messages: [
        {
          id: 0,
          username: "Joshua Koh",
          content: "Hello Next.js!",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 1,
          username: "Mashair Beauty",
          content: "Hi Joshua! Welcome to my website.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
        {
          id: 2,
          username: "John Wick",
          content: "Hi Everyone! I'm John Wick.",
          img: "imgURL",
          sentDate: "30-06-2022",
        },
      ],
      type: "group",
      thumbnail_img: "",
      title: "Test User Default Icon",
    },
  };

  const list = Object.keys(object).map((key) => object[key]);

  let imgPath;
  if (!filteredChat || filteredChat === []) {
    return <p>Loading</p>;
  }

  if (!filteredChat.thumbnail_img || filteredChat.thumbnail_img === "") {
    imgPath = `/images/user/user-skeleton.png`;
  } else {
    imgPath = `/images/chatroom/${filteredChat[0].id}/${filteredChat[0].thumbnail_img}`;
  }

  function filterChat() {
    const filteredChat = list.filter((chat) => {
      return parseInt(chat.id.toString().slice(6)) === activeChat;
    });

    console.log(filteredChat[0]);

    return filteredChat;
  }

  function getUserListContainerWidth() {
    const userListContainer = document.getElementById("userListContainer");

    const containerWidth = userListContainer.offsetWidth;

    messageBox.current.style.setProperty(
      "--user-list-container-width",
      `${containerWidth}px`
    );
  }

  useEffect(() => {
    setFilteredChat(filterChat());

    getUserListContainerWidth();
  }, [activeChat]);

  if (activeChat) {
    return (
      <section className={classes.messageBoxContainer} ref={messageBox}>
        <div className={classes.header}>
          <div className={classes.imgContainer}>
            <Image src={imgPath} width={100} height={100} />
          </div>
          <div className={classes.userStatus}>
            <h2>{filteredChat[0].title}</h2>
            <span>{isOnline && "online"}</span>
          </div>
        </div>

        <div className={classes.contentContainer}></div>
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
