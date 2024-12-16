"use client";

import React, { useState } from "react";
import { useMessenger } from "../context/MessengerContext";

const MessageInput = () => {
  const { selectedUser, sendMessage } = useMessenger();
  const [text, setText] = useState("");

  const handleSendText = () => {
    if (!text.trim()) return;
    sendMessage(selectedUser, text, "text");
    setText("");
  };

  const handleSendMedia = () => {
    const mediaUrl = prompt("Entrez l'URL de l'image :");
    if (mediaUrl) {
      sendMessage(selectedUser, mediaUrl, "image");
    }
  };

  return (
    <div style={{
      display: "flex",
      padding: "10px",
      borderTop: "1px solid #ddd",
    }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Écrire un message..."
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "20px",
          border: "1px solid #ccc",
        }}
      />
      <button
        onClick={handleSendText}
        style={{
          padding: "10px",
          marginLeft: "10px",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Envoyer
      </button>
      <button
        onClick={handleSendMedia}
        style={{
          padding: "10px",
          marginLeft: "10px",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        📷
      </button>
    </div>
  );
};

export default MessageInput;
