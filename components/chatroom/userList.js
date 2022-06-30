import React, { useEffect, useState } from "react";
// Import Components
import ChatUser from "./chatUser";
// Import Styles
import classes from "./userList.module.css";

function UserList(props) {
  const { activeChat, setActiveChat } = props;

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

  function activeChatHandler(e) {
    const { id, parentElement } = e.target;
    const chatIndex = parseInt(id.toString().slice(6));

    e.target.setAttribute("active", "true");

    for (let i = 0; i < parentElement.children.length; i++) {
      if (i !== chatIndex) {
        parentElement.children[i].setAttribute("active", "false");
      }
    }

    setActiveChat(chatIndex);
  }

  return (
    <section className={classes.chatUserContainer} id="userListContainer">
      {list &&
        list.map((chat, index) => (
          <ChatUser
            chat={chat}
            key={chat.id}
            chatIndex={index}
            activeChatHandler={activeChatHandler}
          />
        ))}
    </section>
  );
}

export default UserList;
