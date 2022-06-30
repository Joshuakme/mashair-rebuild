// Import Next & React Components
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// Import Components
import UserList from "../../components/chatroom/userList/userlist";
import MessageBox from "../../components/chatroom/messageBox/messageBox";
// Import Third Party Packages
import { useSession } from "next-auth/react";
// Import Server Side Functinos
import fs from "fs";
import path from "path";
// Import Styles
import classes from "../../styles/chatroom.module.css";

function Chatroom(props) {
  const { data: session, status } = useState();
  const router = useRouter();
  const [chatHistory, setChatHistory] = useState();
  const [activeChat, setActiveChat] = useState();
  const { chats } = props;

  // if (!session || status === "unauthenticated") {
  //   router.push("/login");
  // }

  console.log(session);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // Functions
  async function fetchChatHistory() {
    console.log(chats);

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
  }, [props.chats]);

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
