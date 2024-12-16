"use client";

import React from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import MessageInput from "../components/MessageInput";
import { MessengerProvider } from "../context/MessengerContext";

const MessengerPage = () => {
  return (
    <MessengerProvider>
      <div style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}>
        <Sidebar />
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <ChatWindow />
          <MessageInput />
        </div>
      </div>
    </MessengerProvider>
  );
};

export default MessengerPage;

