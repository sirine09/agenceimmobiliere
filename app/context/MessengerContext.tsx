"use client";

import React, { createContext, useContext, useState } from "react";

const MessengerContext = createContext();

export const useMessenger = () => useContext(MessengerContext);

export const MessengerProvider = ({ children }) => {

  const agents = [
    {
      id: 1,
      name: "Karim Ben Fraj",
      imageUrl: "images/agents/agent1.jpg",
      messages: [
        { type: "text", sender: "agent", content: "Bonjour, comment puis-je vous aider ?" },
        { type: "text", sender: "user", content: "Je veux en savoir plus sur la villa." },
        { type: "image", sender: "agent", content: "images/properties/maisondeluxe_1.jpg" },
      ],
    },
    {
      id: 2,
      name: "Hend Ben Boubaker",
      imageUrl: "images/agents/agent2.jpg",
      messages: [
        { type: "text", sender: "agent", content: "Avez-vous des préférences spécifiques ?" },
        { type: "text", sender: "user", content: "Oui, je cherche un appartement à louer." },
      ],
    },
    {
      id: 3,
      name: "Lotfi Becha",
      imageUrl: "images/agents/agent3.jpg",
      messages: [
        { type: "text", sender: "agent", content: "Nous avons des options disponibles, souhaitez-vous les voir ?" },
      ],
    },
  ];

  // Initialisez selectedUser avec l'ID du premier agent
  const [selectedUser, setSelectedUser] = useState(agents[0]?.id || null);

  const sendMessage = (agentId, content, type = "text") => {
    const agent = agents.find((agent) => agent.id === agentId);
    if (agent) {
      agent.messages.push({ type, sender: "user", content });
    }
  };

  return (
    <MessengerContext.Provider value={{ agents, selectedUser, setSelectedUser, sendMessage }}>
      {children}
    </MessengerContext.Provider>
  );
};
