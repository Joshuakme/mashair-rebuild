import React, { useEffect, useState } from "react";
// Import Components
import UserList from "../../components/chatroom/userlist";
import MessageBox from "../../components/chatroom/messagebox";
// Import Helper Functions

// Import Server Side Functinos
import fs from "fs";
import path from "path";
// Import Styles
import classes from "../../styles/chatroom.module.css";

function Chatroom(props) {
  const [chatHistory, setChatHistory] = useState();
  const [activeChat, setActiveChat] = useState();

  // Functions
  async function fetchChatHistory() {
    // console.log("Fetching Chat History...");

    const { chats } = props;

    // console.log(chats);

    setChatHistory(chats);

    // const data = await fetch("/api/chatroom/");
    {
      /* data: {
      [userId]: {
        chatrooms: {
          [chatId]: {
            username: "Joshua Koh",~
            content: "Hello Next.js!",
            img: "imgURL",
            sentDate: "",
          }
        }
      }
    } */
    }
  }

  useEffect(() => {
    fetchChatHistory();
  }, [chatHistory]);

  return (
    <main className={classes.chatroomContainer}>
      <UserList
        chatHistory={chatHistory}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
      <MessageBox
        chatHistory={chatHistory}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
      />
    </main>
  );
}

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), "chat", "dummy_messages.json");
  const chatHistory = fs.readFileSync(filePath);

  return {
    props: {
      chats: JSON.parse(chatHistory),
    },
  };
}

export default Chatroom;
