// Import Next & React Components
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// Import Components
import UserList from "../../components/chatroom/userList/userList";
import MessageBox from "../../components/chatroom/messageBox/messageBox";
// Import Third Party Packages
import { useSession } from "next-auth/react";
// Import Server Side Functinos
import fs from "fs";
import path from "path";
// Import Styles
import classes from "../../styles/chatroom.module.css";

function Chatroom(props) {
  const { chats } = props;

  const { data: session, status } = useState();
  const router = useRouter();
  const [chatHistory, setChatHistory] = useState();
  const [activeChat, setActiveChat] = useState();

  const object = {
    chatId0: {
      id: "chatId0",
      messages: [
        {
          id: 0,
          username: "Joshua Koh",
          content: "Hello Mashair Beauty!",
          sentDate: "2022-06-30T06:31:55",
        },
        {
          id: 1,
          username: "Mashair Beauty",
          content: "Hi Joshua, Welcome to Mashair Beauty! [auto-bot]",
          sentDate: "2022-06-30T06:31:55",
        },
        {
          id: 2,
          username: "Joshua Koh",
          content: "I am the Frontend Developer of this website.",
          sentDate: "2022-06-30T06:31:55",
        },
        {
          id: 3,
          username: "Mashair Beauty",
          content:
            "The need for hairdressing, grooming, facials, and related services will not decline as long as people live on this earth. In fact, in this age of fashion and corporate culture, people are more interested in grooming themselves than ever before. So, the beauty salons and hairdressing businesses are always on the rise. Having that in mind, for the people in need of websites for such businesses, we present you Barber, a completely ready hairdressing and beauty salon Joomla template.",
          sentDate: "2022-06-30T06:31:55",
        },
        {
          id: 4,
          username: "Joshua Koh",
          content: "Hello Next.js!",
          sentDate: "2022-06-30T06:31:55",
        },
        {
          id: 5,
          username: "Mashair Beauty",
          content: "Hi Joshua! Welcome to my website.",
          sentDate: "2022-06-30T06:31:55",
        },
        {
          id: 6,
          username: "Joshua Koh",
          content: "Hello Next.js!",
          sentDate: "2022-06-30T06:31:55",
        },
        {
          id: 7,
          username: "Mashair Beauty",
          content: "Hi Joshua! Welcome to my website.",
          sentDate: "2022-06-30T06:31:55",
        },
        {
          id: 8,
          username: "Mashair Beauty",
          content:
            "Showcase what customers say after taking services from your barbershop. Have customers’ remarks, name, and the images in the testimonial section. Inspire potential customers with the happy words of the served customers.",
          sentDate: "2022-06-30T06:31:55",
        },
        {
          id: 9,
          username: "Mashair Beauty",
          content:
            "Notes: To be able to use this template, you must have SP Page Builder Pro installed on your site. We introduced a brand new (One-Click Installer) system where you don’t need any Quickstart pack (for this template) to get demo data as before. You can import sample data of articles, SP Page Builder pages, menus, modules, and template styles in smaller file sizes. You can also go for a fresh installation. The system shows you two of these ways. The choice is yours.",
          sentDate: "2022-06-30T06:31:55",
        },
      ],
      type: "private",
      thumbnail_img: "android-chrome-512x512.png",
      title: "Mashair Beauty ⚛️",
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

  useEffect(() => {
    fetchChatHistory();
  }, [props.chats]);

  // if (!session || status === "unauthenticated") {
  //   router.push("/login");
  // }

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  // Functions
  async function fetchChatHistory() {
    // console.log(chats);

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

  return (
    <main className={classes.chatroomContainer}>
      <Head>
        <title>Chatroom</title>
      </Head>
      <UserList
        chatHistory={chatHistory}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        object={object}
      />
      <MessageBox
        chatHistory={chatHistory}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        object={object}
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
