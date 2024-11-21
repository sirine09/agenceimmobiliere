// "use client";

// import React, { useState } from "react";
// import UserModalProps from "./components/UserModal";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// const MessengerPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Salut, j'ai un problème avec mon compte.", sender: "utilisateur" },
//     { id: 2, text: "Quel est le problème ?", sender: "agent" },
//     { id: 3, text: "Je n'arrive pas à me connecter.", sender: "utilisateur" },
//   ]);
//   const [inputMessage, setInputMessage] = useState("");
//   const [isTyping, setIsTyping] = useState(false);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleSendMessage = () => {
//     if (inputMessage.trim() === "") return;

//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { id: prevMessages.length + 1, text: inputMessage, sender: "utilisateur" },
//     ]);

//     setInputMessage(""); // Effacer le champ de saisie

//     // Afficher l'indicateur de saisie
//     setIsTyping(true);

//     // Simuler la saisie et la réponse de l'agent
//     setTimeout(() => {
//       setIsTyping(false);
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         {
//           id: prevMessages.length + 2,
//           text: "Bonjour, comment puis-je vous aider ?",
//           sender: "agent",
//         },
//       ]);
//     }, 1500); // Simuler un délai de 1,5 seconde pour la saisie
//   };

//   return (
//     <div className="flex flex-col max-w-sm mx-auto bg-white shadow-md rounded-lg p-4">
//       {/* En-tête */}
//       <div className="flex items-center border-b pb-4 mb-4">
//         <Avatar className="w-10 h-10 flex-shrink-0">
//           <AvatarImage src="https://github.com/shadcn.png" alt="Avatar Utilisateur" />
//           <AvatarFallback>SD</AvatarFallback>
//         </Avatar>
//         <div className="ml-3">
//           <h2 className="font-semibold text-gray-800">Sofia Davis</h2>
//           <p className="text-sm text-gray-500">m@example.com</p>
//         </div>
//         <button
//           onClick={toggleModal}
//           className="ml-auto text-gray-500 hover:text-gray-700"
//         >
//           <span className="text-xl">+</span>
//         </button>
//       </div>

//       {/* Messages de chat */}
//       <div className="flex flex-col space-y-4 overflow-y-auto max-h-96">
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className={`flex items-center space-x-3 ${
//               message.sender === "utilisateur" ? "justify-end" : "justify-start"
//             }`}
//           >
//             {message.sender === "agent" && (
//               <Avatar className="w-8 h-8 flex-shrink-0">
//                 <AvatarImage
//                   src="https://github.com/shadcn.png"
//                   alt="Avatar Agent"
//                 />
//                 <AvatarFallback>AG</AvatarFallback>
//               </Avatar>
//             )}
//             <div
//               className={`p-3 rounded-lg ${
//                 message.sender === "utilisateur"
//                   ? "bg-orange-500 text-white"
//                   : "bg-gray-200 text-gray-800"
//               }`}
//             >
//               {message.text}
//             </div>
//             {message.sender === "utilisateur" && (
//               <Avatar className="w-8 h-8 flex-shrink-0">
//                 <AvatarImage
//                   src="https://github.com/shadcn.png"
//                   alt="Avatar Utilisateur"
//                 />
//                 <AvatarFallback>SD</AvatarFallback>
//               </Avatar>
//             )}
//           </div>
//         ))}

//         {/* Indicateur de saisie */}
//         {isTyping && (
//           <div className="flex items-center space-x-3 justify-start">
//             <Avatar className="w-8 h-8 flex-shrink-0">
//               <AvatarImage
//                 src="https://github.com/shadcn.png"
//                 alt="Avatar Agent"
//               />
//               <AvatarFallback>AG</AvatarFallback>
//             </Avatar>
//             <div className="p-3 rounded-lg bg-gray-200 text-gray-800">
//               <span className="animate-pulse">Saisie en cours...</span>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Saisie de message */}
//       <div className="mt-4 flex items-center border-t pt-4">
//         <input
//           type="text"
//           placeholder="Écrivez votre message..."
//           value={inputMessage}
//           onChange={(e) => setInputMessage(e.target.value)}
//           className="flex-grow border rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
//         />
//         <button
//           onClick={handleSendMessage}
//           className="ml-2 bg-gray-800 text-white rounded-lg p-2 shadow-sm hover:bg-gray-700"
//         >
//           Envoyer
//         </button>
//       </div>

//       {/* Modal */}
//       <UserModalProps isOpen={isModalOpen} onClose={toggleModal} />
//     </div>
//   );
// };

// export default MessengerPage;
// 'use client'
// import React, { useState } from "react";
// import UserModal from "./components/UserModal"; // Adjust the import if needed
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// const MessengerPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Salut, j'ai un problème avec mon compte.", sender: "utilisateur" },
//     { id: 2, text: "Quel est le problème ?", sender: "agent" },
//     { id: 3, text: "Je n'arrive pas à me connecter.", sender: "utilisateur" },
//   ]);
//   const [inputMessage, setInputMessage] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null); // Add this state to track the selected user

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleSendMessage = () => {
//     if (inputMessage.trim() === "") return;

//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { id: prevMessages.length + 1, text: inputMessage, sender: "utilisateur" },
//     ]);

//     setInputMessage(""); // Clear input field

//     setIsTyping(true);

//     setTimeout(() => {
//       setIsTyping(false);
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         {
//           id: prevMessages.length + 2,
//           text: "Bonjour, comment puis-je vous aider ?",
//           sender: "agent",
//         },
//       ]);
//     }, 1500); // Simulate typing delay
//   };

//   return (
//     <div className="flex flex-col max-w-sm mx-auto bg-white shadow-md rounded-lg p-4">
//       {/* Chat Header */}
//       <div className="flex items-center border-b pb-4 mb-4">
//         <Avatar className="w-10 h-10 flex-shrink-0">
//           <AvatarImage src={selectedUser?.avatar || "https://github.com/shadcn.png"} alt="Avatar" />
//           <AvatarFallback>{selectedUser?.name?.charAt(0)}</AvatarFallback>
//         </Avatar>
//         <div className="ml-3">
//           <h2 className="font-semibold text-gray-800">{selectedUser?.name || "Choisir un utilisateur"}</h2>
//           <p className="text-sm text-gray-500">{selectedUser?.email}</p>
//         </div>
//         <button
//           onClick={toggleModal}
//           className="ml-auto text-gray-500 hover:text-gray-700"
//         >
//           <span className="text-xl">+</span>
//         </button>
//       </div>

//       {/* Messages */}
//       <div className="flex flex-col space-y-4 overflow-y-auto max-h-96">
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className={`flex items-center space-x-3 ${
//               message.sender === "utilisateur" ? "justify-end" : "justify-start"
//             }`}
//           >
//             {message.sender === "agent" && (
//               <Avatar className="w-8 h-8 flex-shrink-0">
//                 <AvatarImage src="https://github.com/shadcn.png" alt="Avatar Agent" />
//                 <AvatarFallback>AG</AvatarFallback>
//               </Avatar>
//             )}
//             <div
//               className={`p-3 rounded-lg ${
//                 message.sender === "utilisateur"
//                   ? "bg-orange-500 text-white"
//                   : "bg-gray-200 text-gray-800"
//               }`}
//             >
//               {message.text}
//             </div>
//             {message.sender === "utilisateur" && (
//               <Avatar className="w-8 h-8 flex-shrink-0">
//                 <AvatarImage src="https://github.com/shadcn.png" alt="Avatar Utilisateur" />
//                 <AvatarFallback>SD</AvatarFallback>
//               </Avatar>
//             )}
//           </div>
//         ))}

//         {/* Typing Indicator */}
//         {isTyping && (
//           <div className="flex items-center space-x-3 justify-start">
//             <Avatar className="w-8 h-8 flex-shrink-0">
//               <AvatarImage src="https://github.com/shadcn.png" alt="Avatar Agent" />
//               <AvatarFallback>AG</AvatarFallback>
//             </Avatar>
//             <div className="p-3 rounded-lg bg-gray-200 text-gray-800">
//               <span className="animate-pulse">Saisie en cours...</span>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Input Message */}
//       <div className="mt-4 flex items-center border-t pt-4">
//         <input
//           type="text"
//           placeholder="Écrivez votre message..."
//           value={inputMessage}
//           onChange={(e) => setInputMessage(e.target.value)}
//           className="flex-grow border rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
//         />
//         <button
//           onClick={handleSendMessage}
//           className="ml-2 bg-gray-800 text-white rounded-lg p-2 shadow-sm hover:bg-gray-700"
//         >
//           Envoyer
//         </button>
//       </div>

//       {/* Modal for user selection */}
//       <UserModal isOpen={isModalOpen} onClose={toggleModal} onSelectUser={setSelectedUser} />
//     </div>
//   );
// };

// export default MessengerPage;
// 'use client'
// import React, { useState } from "react";
// import UserModalProps from '../page'; // Corrected import for UserModal
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// const MessengerPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { id: 1, text: "Salut, j'ai un problème avec mon compte.", sender: "utilisateur" },
//     { id: 2, text: "Quel est le problème ?", sender: "agent" },
//     { id: 3, text: "Je n'arrive pas à me connecter.", sender: "utilisateur" },
//   ]);
//   const [inputMessage, setInputMessage] = useState("");
//   const [isTyping, setIsTyping] = useState(false);
//   const [selectedUser, setSelectedUser] = useState<{ name: string; email: string; avatar: string } | null>(null);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleSendMessage = () => {
//     if (inputMessage.trim() === "") return;

//     setMessages((prevMessages) => [
//       ...prevMessages,
//       { id: prevMessages.length + 1, text: inputMessage, sender: "utilisateur" },
//     ]);

//     setInputMessage(""); // Clear input field

//     setIsTyping(true);

//     setTimeout(() => {
//       setIsTyping(false);
//       setMessages((prevMessages) => [
//         ...prevMessages,
//         {
//           id: prevMessages.length + 2,
//           text: "Bonjour, comment puis-je vous aider ?",
//           sender: "agent",
//         },
//       ]);
//     }, 1500); // Simulate typing delay
//   };

//   return (
//     <div className="flex flex-col max-w-sm mx-auto bg-white shadow-md rounded-lg p-4">
//       {/* Chat Header */}
//       <div className="flex items-center border-b pb-4 mb-4">
//         <Avatar className="w-10 h-10 flex-shrink-0">
//           <AvatarImage src={selectedUser?.avatar || "https://github.com/shadcn.png"} alt="Avatar" />
//           <AvatarFallback>{selectedUser?.name?.charAt(0)}</AvatarFallback>
//         </Avatar>
//         <div className="ml-3">
//           <h2 className="font-semibold text-gray-800">{selectedUser?.name || "Choisir un utilisateur"}</h2>
//           <p className="text-sm text-gray-500">{selectedUser?.email}</p>
//         </div>
//         <button
//           onClick={toggleModal}
//           className="ml-auto text-gray-500 hover:text-gray-700"
//         >
//           <span className="text-xl">+</span>
//         </button>
//       </div>

//       {/* Messages */}
//       <div className="flex flex-col space-y-4 overflow-y-auto max-h-96">
//         {messages.map((message) => (
//           <div
//             key={message.id}
//             className={`flex items-center space-x-3 ${
//               message.sender === "utilisateur" ? "justify-end" : "justify-start"
//             }`}
//           >
//             {message.sender === "agent" && (
//               <Avatar className="w-8 h-8 flex-shrink-0">
//                 <AvatarImage src="https://github.com/shadcn.png" alt="Avatar Agent" />
//                 <AvatarFallback>AG</AvatarFallback>
//               </Avatar>
//             )}
//             <div
//               className={`p-3 rounded-lg ${
//                 message.sender === "utilisateur"
//                   ? "bg-orange-500 text-white"
//                   : "bg-gray-200 text-gray-800"
//               }`}
//             >
//               {message.text}
//             </div>
//             {message.sender === "utilisateur" && (
//               <Avatar className="w-8 h-8 flex-shrink-0">
//                 <AvatarImage src="https://github.com/shadcn.png" alt="Avatar Utilisateur" />
//                 <AvatarFallback>SD</AvatarFallback>
//               </Avatar>
//             )}
//           </div>
//         ))}

//         {/* Typing Indicator */}
//         {isTyping && (
//           <div className="flex items-center space-x-3 justify-start">
//             <Avatar className="w-8 h-8 flex-shrink-0">
//               <AvatarImage src="https://github.com/shadcn.png" alt="Avatar Agent" />
//               <AvatarFallback>AG</AvatarFallback>
//             </Avatar>
//             <div className="p-3 rounded-lg bg-gray-200 text-gray-800">
//               <span className="animate-pulse">Saisie en cours...</span>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Input Message */}
//       <div className="mt-4 flex items-center border-t pt-4">
//         <input
//           type="text"
//           placeholder="Écrivez votre message..."
//           value={inputMessage}
//           onChange={(e) => setInputMessage(e.target.value)}
//           className="flex-grow border rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
//         />
//         <button
//           onClick={handleSendMessage}
//           className="ml-2 bg-gray-800 text-white rounded-lg p-2 shadow-sm hover:bg-gray-700"
//         >
//           Envoyer
//         </button>
//       </div>

//       {/* Modal for user selection */}
//       <UserModalProps isOpen={isModalOpen} onClose={toggleModal} onSelectUser={(user) => {
//         setSelectedUser(user);
//         setIsModalOpen(false); // Close modal when a user is selected
//       }} />
//     </div>
//   );
// };

// export default MessengerPage;
'use client'
import React, { useState } from "react";
import UserModal from '../page';
import  { useEffect } from 'react';

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const MessengerPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Salut, j'ai un problème avec mon compte.", sender: "utilisateur" },
    { id: 2, text: "Quel est le problème ?", sender: "agent" },
    { id: 3, text: "Je n'arrive pas à me connecter.", sender: "utilisateur" },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedUser, setSelectedUser] = useState<{ name: string; email: string; avatar: string } | null>(null);
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  // Load the selected agent from localStorage when the component mounts
  

  useEffect(() => {
    // Retrieve the selected agent from localStorage when the component mounts
    const storedAgent = localStorage.getItem('selectedAgent');
    if (storedAgent) {
      setSelectedAgent(storedAgent);
    }
  }, []); 
  
  // Handle the modal toggle
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Handle sending the message
  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: prevMessages.length + 1, text: inputMessage, sender: "utilisateur" },
    ]);

    setInputMessage(""); // Clear input field

    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          id: prevMessages.length + 2,
          text: "Bonjour, comment puis-je vous aider ?",
          sender: "agent",
        },
      ]);
    }, 1500); // Simulate typing delay
  };

  return (
    <div className="flex flex-col max-w-sm mx-auto bg-white shadow-md rounded-lg p-4">
      {/* Chat Header */}
      <div className="flex items-center border-b pb-4 mb-4">
        <Avatar className="w-10 h-10 flex-shrink-0">
          <AvatarImage src={selectedUser?.avatar || "https://github.com/shadcn.png"} alt="Avatar" />
          <AvatarFallback>{selectedUser?.name?.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="ml-3">
        <h2 className="font-semibold text-gray-800">
  {   selectedUser?.name ||selectedAgent }
</h2>

          <p className="text-sm text-gray-500">{selectedUser?.email}</p>
        </div>
        <button
          onClick={toggleModal}
          className="ml-auto text-gray-500 hover:text-gray-700"
        >
          <span className="text-xl">+</span>
        </button>
      </div>

      {/* Messages */}
      <div className="flex flex-col space-y-4 overflow-y-auto max-h-96">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-center space-x-3 ${message.sender === "utilisateur" ? "justify-end" : "justify-start"}`}
          >
            {message.sender === "agent" && (
              <Avatar className="w-8 h-8 flex-shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" alt="Avatar Agent" />
                <AvatarFallback>AG</AvatarFallback>
              </Avatar>
            )}
            <div
              className={`p-3 rounded-lg ${message.sender === "utilisateur" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-800"}`}
            >
              {message.text}
            </div>
            {message.sender === "utilisateur" && (
              <Avatar className="w-8 h-8 flex-shrink-0">
                <AvatarImage src="https://github.com/shadcn.png" alt="Avatar Utilisateur" />
                <AvatarFallback>SD</AvatarFallback>
              </Avatar>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-center space-x-3 justify-start">
            <Avatar className="w-8 h-8 flex-shrink-0">
              <AvatarImage src="https://github.com/shadcn.png" alt="Avatar Agent" />
              <AvatarFallback>AG</AvatarFallback>
            </Avatar>
            <div className="p-3 rounded-lg bg-gray-200 text-gray-800">
              <span className="animate-pulse">Saisie en cours...</span>
            </div>
          </div>
        )}
      </div>

      {/* Input Message */}
      <div className="mt-4 flex items-center border-t pt-4">
        <input
          type="text"
          placeholder="Écrivez votre message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="flex-grow border rounded-lg px-3 py-2 text-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-gray-800 text-white rounded-lg p-2 shadow-sm hover:bg-gray-700"
        >
          Envoyer
        </button>
      </div>

      {/* Modal for user selection */}
      <UserModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onSelectUser={(user) => {
          setSelectedUser(user);
          setIsModalOpen(false); // Close modal when a user is selected
        }}
      />
    </div>
  );
};

export default MessengerPage;
