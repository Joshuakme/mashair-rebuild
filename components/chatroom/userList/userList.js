import React, { useEffect, useState } from "react";
// Import Components
import ChatUser from "./chatUser";
// Import Styles
import classes from "./userList.module.css";

function UserList(props) {
  const { chatHistory, activeChat, setActiveChat, object } = props;

  // console.log(chatHistory);

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
