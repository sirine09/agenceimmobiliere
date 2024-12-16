"use client";

import React from "react";
import { useMessenger } from "../context/MessengerContext";

const Sidebar = () => {
  const { agents, setSelectedUser, selectedUser } = useMessenger(); // Assurez-vous que `selectedUser` est exposé depuis votre contexte

  return (
    <div
      style={{
        width: "25%",
        height: "100vh",
        borderRight: "1px solid #ddd",
        padding: "10px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
    <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">Nos Agents</h1>


      {agents.map((agent) => (
        <div
          key={agent.id}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            cursor: "pointer",
            marginBottom: "10px",
            borderRadius: "8px",
            transition: "background-color 0.3s",
            backgroundColor: agent.id === selectedUser ? "rgb(253, 167, 69)" : "#ffffffb0", // Différenciation avec une autre couleur
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          }}
          onClick={() => setSelectedUser(agent.id)} // Mettre à jour l'état de l'agent sélectionné
        >
          <img
            src={agent.imageUrl}
            alt={agent.name}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              marginRight: "20px",
              border: "2px solid #333",
            }}
          />
          <p style={{ fontSize: "16px", fontWeight: "500", color: "#333" }}>{agent.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
