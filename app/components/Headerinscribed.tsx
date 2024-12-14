
// 'use client'; // Ensure this is a Client Component

// import Link from 'next/link';
// import { usePathname } from 'next/navigation'; // Use usePathname to get the current path
// import { Bell, Settings, User, MessageSquare } from 'lucide-react'; // Import icons from lucide-react
// import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'; // Import Avatar component from ShadCN
// import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'; // Import components for dropdown
// import NotificationsCard from '../notifications/page';
// import React, { useState, useEffect } from 'react';

// const Header = () => {
//   const pathname = usePathname(); // Get current path using usePathname

//   const [unreadMessages, setUnreadMessages] = useState([
//     { id: 1, content: 'Message 1', sender: 'Agent A' },
//     { id: 2, content: 'Message 2', sender: 'Agent B' },
//     { id: 3, content: 'Message 3', sender: 'Agent C' },
//   ]); // Sample unread messages

//   const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

//   const handleAgentSelection = (sender: string) => {
//     // Store the selected agent in localStorage
//     localStorage.setItem('selectedAgent', sender);
  
//     // Update the state with the selected agent
//     setSelectedAgent(sender);
//   };

//   const [isMessageDropdownOpen, setIsMessageDropdownOpen] = useState(false); // State for message dropdown visibility

//   // Handle toggle for message dropdown
//   const toggleMessageDropdown = () => {
//     setIsMessageDropdownOpen(!isMessageDropdownOpen);
//   };

//   // Handler when a message is clicked
//   const handleMessageClick = (messageId: number, sender: string) => {
//     // Set the selected agent based on the message sender
//     handleAgentSelection(sender); // Update the agent state

//     // Redirect to the Messenger page with the clicked messageId
//     window.location.href = `/messenger/components`; // Modify the path as needed
//   };

//   // Function to mark all messages as read
//   const markAllAsRead = () => {
//     setUnreadMessages([]); // Clears the unread messages
//   };

//   return (
//     <header className="bg-white shadow-md sticky  top-0 z-50">
//       <div className="mx-auto flex justify-between p-4">
//         {/* Logo */}
//         <Link href="/aboutinscribed">
//           <img src="/images/logo/logo.png" alt="Logo Agence Immobilière" className="h-12" />
//         </Link>

//         {/* Navigation */}
//         <nav className="flex space-x-6">
//           <Link href="/aboutinscribed" className={`${pathname === '/' ? 'text-orange-500 underline' : 'text-gray-700'}`}>Accueil</Link>
//           <Link href="/properties" className={`${pathname === '/properties' ? 'text-orange-500 underline' : 'text-gray-700'}`}>Propriétés</Link>
//           <Link href="/agents" className={`${pathname === '/agents' ? 'text-orange-500 underline' : 'text-gray-700'}`}>Agents</Link>
//           <Link href="/about" className={`${pathname === '/about' ? 'text-orange-500 underline' : 'text-gray-700'}`}>À propos</Link>
      
//           {/* Notification and Avatar with Dropdown */}
//           <div className="flex space-x-4 ml-auto">
//             {/* Notification Icon */}
//             <div className="relative mb-4 z-50">
//               <NotificationsCard />
//             </div>

//             {/* Messages Icon with Unread Count */}
//             <div className="relative z-50">
//               <MessageSquare
//                 className="w-6 h-6 text-gray-700 hover:text-orange-500 cursor-pointer"
//                 onClick={toggleMessageDropdown} // Toggle dropdown visibility on icon click
//               />
//               {unreadMessages.length > 0 && (
//                 <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-500 text-white text-xs rounded-full text-center">
//                   {unreadMessages.length}
//                 </span>
//               )}

//               {/* Dropdown for Unread Messages */}
//               {isMessageDropdownOpen && (
//                 <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-64 p-2 z-50">
//                   {unreadMessages.length > 0 ? (
//                     unreadMessages.map((message) => (
//                       <div
//                         key={message.id}
//                         className="p-2 border-b hover:bg-gray-100 cursor-pointer"
//                         onClick={() => handleMessageClick(message.id, message.sender)} // Pass sender to handle agent selection
//                       >
//                         <p className="font-semibold">{message.sender}</p>
//                         <p className="text-sm text-gray-500">{message.content}</p>
//                       </div>
//                     ))
//                   ) : (
//                     <p className="p-2 text-gray-500">No unread messages</p>
//                   )}

//                   {/* Button to Mark All as Read */}
//                   <button
//                     onClick={markAllAsRead}
//                     className="w-full mt-2 py-2 text-center text-white bg-orange-500 hover:bg-orange-600 rounded-lg"
//                   >
//                     Mark all as read
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Settings Icon */}
//             <Settings className="w-6 h-6 text-gray-700 hover:text-orange-500 cursor-pointer" />

//             {/* Avatar with Dropdown Menu */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <button className="flex space-x-2 text-gray-700 hover:text-orange-500">
//                   {/* Avatar Component */}
//                   <Avatar >
//                     <AvatarImage src="https://github.com/shadcn.png" className='mb-4'/>
//                     <AvatarFallback>CN</AvatarFallback>
//                   </Avatar>
//                   <span className="font-semibold ">Nom d'utilisateur</span>
//                 </button>
//               </DropdownMenuTrigger>

//               <DropdownMenuContent align="end" className="bg-white p-2 shadow-lg rounded-lg w-48">
//                 <DropdownMenuLabel>Menu utilisateur</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <Link href="/favorites" className="block text-gray-700">Mes Biens favoris</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link href="/chat" className="block text-gray-700">Mes agents</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link href="/messenger/components" className="block text-gray-700">Messenger</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <Link href="/" className="block text-gray-700">Se déconnecter</Link>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
'use client'; // Ensure this is a Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Settings, User, MessageSquare } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import NotificationsCard from '../notifications/page';
import React, { useState, useEffect } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [clientName, setClientName] = useState('Utilisateur');

  // Sample unread messages state and other existing states...
  const [unreadMessages, setUnreadMessages] = useState([
    { id: 1, content: 'Message 1', sender: 'Agent A' },
    { id: 2, content: 'Message 2', sender: 'Agent B' },
    { id: 3, content: 'Message 3', sender: 'Agent C' },
  ]);

  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);
  const [isMessageDropdownOpen, setIsMessageDropdownOpen] = useState(false);

  // Retrieve client name from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedName = localStorage.getItem('clientName');
      if (storedName) {
        setClientName(storedName);
      }
    }
  }, []);

  // Existing methods remain the same...
  const handleAgentSelection = (sender: string) => {
    localStorage.setItem('selectedAgent', sender);
    setSelectedAgent(sender);
  };

  const toggleMessageDropdown = () => {
    setIsMessageDropdownOpen(!isMessageDropdownOpen);
  };

  const handleMessageClick = (messageId: number, sender: string) => {
    handleAgentSelection(sender);
    window.location.href = `/messenger/components`;
  };

  const markAllAsRead = () => {
    setUnreadMessages([]);
  };

  // Logout handler to clear localStorage
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('clientName');
      // You might want to add more logout logic here (e.g., clearing tokens)
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto flex justify-between p-4">
        {/* Logo */}
        <Link href="/aboutinscribed">
          <img src="/images/logo/logo.png" alt="Logo Agence Immobilière" className="h-12" />
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6">
          {/* Existing navigation links remain the same */}
          <Link href="/aboutinscribed" className={`${pathname === '/' ? 'text-orange-500 underline' : 'text-gray-700'}`}>Accueil</Link>
          <Link href="/properties" className={`${pathname === '/properties' ? 'text-orange-500 underline' : 'text-gray-700'}`}>Propriétés</Link>
          <Link href="/agents" className={`${pathname === '/agents' ? 'text-orange-500 underline' : 'text-gray-700'}`}>Agents</Link>
          <Link href="/about" className={`${pathname === '/about' ? 'text-orange-500 underline' : 'text-gray-700'}`}>À propos</Link>
      
          {/* Notification and Avatar with Dropdown */}
          <div className="flex space-x-4 ml-auto">
            {/* Existing icons and dropdowns remain the same */}
            <div className="relative mb-4 z-50">
              <NotificationsCard />
            </div>

            {/* Messages Icon */}
            <div className="relative z-50">
              <MessageSquare
                className="w-6 h-6 text-gray-700 hover:text-orange-500 cursor-pointer"
                onClick={toggleMessageDropdown}
              />
              {unreadMessages.length > 0 && (
                <span className="absolute top-0 right-0 inline-block w-4 h-4 bg-red-500 text-white text-xs rounded-full text-center">
                  {unreadMessages.length}
                </span>
              )}

              {/* Existing message dropdown remains the same */}
              {isMessageDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-64 p-2 z-50">
                  {unreadMessages.length > 0 ? (
                    unreadMessages.map((message) => (
                      <div
                        key={message.id}
                        className="p-2 border-b hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleMessageClick(message.id, message.sender)}
                      >
                        <p className="font-semibold">{message.sender}</p>
                        <p className="text-sm text-gray-500">{message.content}</p>
                      </div>
                    ))
                  ) : (
                    <p className="p-2 text-gray-500">No unread messages</p>
                  )}

                  <button
                    onClick={markAllAsRead}
                    className="w-full mt-2 py-2 text-center text-white bg-orange-500 hover:bg-orange-600 rounded-lg"
                  >
                    Mark all as read
                  </button>
                </div>
              )}
            </div>

            {/* Settings Icon */}
            <Settings className="w-6 h-6 text-gray-700 hover:text-orange-500 cursor-pointer" />

            {/* Avatar with Dropdown Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex space-x-2 text-gray-700 hover:text-orange-500">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" className='mb-4'/>
                    <AvatarFallback>{clientName.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span className="font-semibold">{clientName}</span>
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="bg-white p-2 shadow-lg rounded-lg w-48">
                <DropdownMenuLabel>Menu utilisateur</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/profil_client?id=27" className="block text-gray-700">Mon profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/favorites" className="block text-gray-700">Mes Biens favoris</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/chat" className="block text-gray-700">Mes agents</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/messenger/components" className="block text-gray-700">Messenger</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link 
                    href="/" 
                    className="block text-gray-700"
                    onClick={handleLogout}
                  >
                    Se déconnecter
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;