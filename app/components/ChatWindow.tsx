"use client";

import React from "react";
import { useMessenger } from "../context/MessengerContext";

const ChatWindow = () => {
  const { agents, selectedUser, sendMessage } = useMessenger();
  const agent = agents.find((a) => a.id === selectedUser);

  const handleSendMessage = () => {
    const messageContent = prompt("Entrez votre message :");
    if (messageContent) {
      sendMessage(agent.id, messageContent, "text");
    }
  };

  if (!agent) return <div style={styles.noConversation}>Aucune conversation sélectionnée</div>;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <img src={agent.imageUrl} alt={agent.name} style={styles.agentImage} />
        <h2 style={styles.agentName}>{agent.name}</h2>
      </div>
      <div style={styles.messages}>
        {agent.messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...styles.message,
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.sender === "user" ? "#007bff" : "#ffffff",
              color: msg.sender === "user" ? "#fff" : "#333",
            }}
          >
            {msg.type === "text" ? (
              msg.content
            ) : msg.type === "video-call" || msg.type === "audio-call" ? (
              <div style={styles.callMessage}>
                {msg.type === "video-call" ? "Appel vidéo" : "Appel audio"} avec {msg.content}
              </div>
            ) : (
              <img src={msg.content} alt="Message Media" style={styles.messageImage} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: "20px",
    borderLeft: "1px solid #ddd",
    height: "100vh",
    background: "#ffff",
    fontFamily: "'Poppins', sans-serif",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px",
  },
  agentImage: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    marginRight: "10px",
  },
  agentName: {
    fontSize: "20px",
    color: "#333",
  },
  messages: {
    flex: 1,
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
    backgroundColor: "#fff8e1",
    borderRadius: "8px",
  },
  message: {
    maxWidth: "70%",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "14px",
    wordBreak: "break-word",
  },
  messageImage: {
    maxWidth: "100%",
    borderRadius: "5px",
  },
  callMessage: {
    fontStyle: "italic",
    fontSize: "13px",
    color: "#666",
  },
  noConversation: {
    padding: "20px",
    textAlign: "center",
    color: "#999",
  },
};

export default ChatWindow;