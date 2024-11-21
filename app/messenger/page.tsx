
// import React, { useState } from "react";

// interface UserModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSelectUser: (user: { name: string; email: string; avatar: string }) => void;
// }

// const users = [
//   { name: "Olivia Martin", email: "m@example.com", avatar: "https://github.com/shadcn.png" },
//   { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", avatar: "https://github.com/shadcn.png" },
//   { name: "Emma Wilson", email: "emma@example.com", avatar: "https://github.com/shadcn.png" },
//   { name: "Jackson Lee", email: "lee@example.com", avatar: "https://github.com/shadcn.png" },
//   { name: "William Kim", email: "will@email.com", avatar: "https://github.com/shadcn.png" },
// ];

// const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSelectUser }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//         >
//           ×
//         </button>
//         <h2 className="text-lg font-semibold mb-2">Nouveau message</h2>
//         <p className="text-sm text-gray-500 mb-4">
//           Invitez un utilisateur à cette conversation. Cela créera un nouveau message de groupe.
//         </p>
//         <input
//           type="text"
//           placeholder="Rechercher un utilisateur..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full border px-3 py-2 rounded-lg mb-4 text-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
//         />
//         <div className="space-y-2">
//           {filteredUsers.map((user, index) => (
//             <div
//               key={index}
//               onClick={() => {
//                 onSelectUser(user); // Pass the selected user to the parent
//                 onClose(); // Close the modal
//               }}
//               className="flex items-center space-x-3 p-2 hover:bg-orange-100 cursor-pointer rounded-lg"
//             >
//               <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
//               <div>
//                 <p className="font-semibold">{user.name}</p>
//                 <p className="text-sm text-gray-500">{user.email}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserModal;
// 'use client'
// import React, { useState } from "react";

// interface UserModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   onSelectUser: (user: { name: string; email: string; avatar: string }) => void;
// }

// const users = [
//   { name: "Olivia Martin", email: "m@example.com", avatar: "https://github.com/shadcn.png" },
//   { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", avatar: "https://github.com/shadcn.png" },
//   { name: "Emma Wilson", email: "emma@example.com", avatar: "https://github.com/shadcn.png" },
//   { name: "Jackson Lee", email: "lee@example.com", avatar: "https://github.com/shadcn.png" },
//   { name: "William Kim", email: "will@email.com", avatar: "https://github.com/shadcn.png" },
// ];

// const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSelectUser }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//         >
//           ×
//         </button>
//         <h2 className="text-lg font-semibold mb-2">Nouveau message</h2>
//         <p className="text-sm text-gray-500 mb-4">
//           Invitez un utilisateur à cette conversation. 
//         </p>
//         <input
//           type="text"
//           placeholder="Rechercher un utilisateur..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full border px-3 py-2 rounded-lg mb-4 text-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
//         />
//         <div className="space-y-2">
//           {filteredUsers.map((user, index) => (
//             <div
//               key={index}
//               onClick={() => {
//                 onSelectUser(user); // Pass the selected user to the parent
//                 onClose(); // Close the modal
//               }}
//               className="flex items-center space-x-3 p-2 hover:bg-orange-100 cursor-pointer rounded-lg"
//             >
//               <div className="w-10 h-10 rounded-full overflow-hidden">
//                 <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
//               </div>
//               <div>
//                 <p className="font-semibold text-gray-800">{user.name}</p>
//                 <p className="text-sm text-gray-500">{user.email}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserModal;
'use client'
import React, { useState } from "react";

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectUser: (user: { name: string; email: string; avatar: string }) => void;
}

const users = [
  { name: "Olivia Martin", email: "m@example.com", avatar: "https://github.com/shadcn.png" },
  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", avatar: "https://github.com/shadcn.png" },
  { name: "Emma Wilson", email: "emma@example.com", avatar: "https://github.com/shadcn.png" },
  { name: "Jackson Lee", email: "lee@example.com", avatar: "https://github.com/shadcn.png" },
  { name: "William Kim", email: "will@email.com", avatar: "https://github.com/shadcn.png" },
];

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSelectUser }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
        <h2 className="text-lg font-semibold mb-2">Nouveau message</h2>
        <p className="text-sm text-gray-500 mb-4">
          Invitez un utilisateur à cette conversation. 
        </p>
        <input
          type="text"
          placeholder="Rechercher un utilisateur..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border px-3 py-2 rounded-lg mb-4 text-gray-800 focus:outline-none focus:ring focus:ring-gray-300"
        />
        <div className="space-y-2">
          {filteredUsers.map((user, index) => (
            <div
              key={index}
              onClick={() => {
                onSelectUser(user); // Pass the selected user to the parent
                onClose(); // Close the modal
              }}
              className="cursor-pointer flex items-center p-2 hover:bg-gray-100 rounded-lg"
            >
              <img
                src={user.avatar}
                alt="Avatar"
                className="w-8 h-8 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserModal;
