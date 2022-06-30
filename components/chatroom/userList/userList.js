import React, { useEffect, useState } from "react";
// Import Components
import ChatUser from "./chatUser";
// Import Styles
import classes from "./userList.module.css";

function UserList(props) {
  const { chatHistory, activeChat, setActiveChat } = props;

  const object = {
    chatId0: {
      id: "chatId0",
      messages: [
        {
          id: 0,
          username: "Joshua Koh",
          content: "Hello Next.js!",
          img: "imgURL",
          sentDate: "2022-06-30T06:31:55",
        },
        {
          id: 1,
          username: "Mashair Beauty ⚛️",
          content: "Hi Joshua! Welcome to my website.",
          img: "imgURL",
          sentDate: "2022-06-30T06:31:55",
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
          sentDate: "2022-06-30T06:01:55",
        },
        {
          id: 1,
          username: "Mashair Beauty",
          content: "Hi Joshua! Welcome to my website.",
          img: "imgURL",
          sentDate: "2022-06-30T09:59:55",
        },
        {
          id: 2,
          username: "John Wick",
          content: "Hi Everyone! I'm John Wick.",
          img: "imgURL",
          sentDate: "2022-06-30T06:31:55",
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
          sentDate: "2022-06-30T06:31:55",
        },
        {
          id: 1,
          username: "Mashair Beauty",
          content: "Hi Joshua! Welcome to my website.",
          img: "imgURL",
          sentDate: "2022-06-30T06:31:55",
        },
        {
          id: 2,
          username: "John Wick",
          content: "Hi Everyone! I'm John Wick.",
          img: "imgURL",
          sentDate: "2022-06-30T06:31:55",
        },
      ],
      type: "group",
      thumbnail_img: "",
      title: "Test User Default Icon",
    },
  };

  console.log(chatHistory);

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
