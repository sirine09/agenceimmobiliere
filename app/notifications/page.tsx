'use client'
import React, { useState } from "react";
import { Bell } from 'lucide-react'; // Import Bell icon
import Link from 'next/link';

const NotificationsCard = () => {
  const [pushNotificationsEnabled, setPushNotificationsEnabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Your call has been confirmed.", time: "1 hour ago", read: false },
    { id: 2, message: "You have a new message!", time: "1 hour ago", read: false },
    { id: 3, message: "Your subscription is expiring soon!", time: "2 hours ago", read: false },
  ]);

  const togglePushNotifications = () => {
    setPushNotificationsEnabled(!pushNotificationsEnabled);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => ({
      ...notification,
      read: true,
    }));
    setNotifications(updatedNotifications);
  };

  return (
    <div className="flex flex-col justify-center  bg-white ">
      <div className="relative">
        {/* Bell Icon with Click Handler */}
        <button
          onClick={toggleModal}
          className="relative focus:outline-none"
        >
          <Bell className="w-6 h-6 text-gray-600 " />
          {/* Badge for notification count */}
          {notifications.filter((n) => !n.read).length > 0 && (
            <span className="absolute top-0 right-0 inline-flex  justify-center w-4 h-4 bg-red-500 text-white text-xs rounded-full">
              {notifications.filter((n) => !n.read).length}
            </span>
          )}
        </button>
      </div>


      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Notifications</h2>
            <div>
              <p className="text-xl font-extrabold text-zinc-950 dark:text-white md:text-3xl">
                Notifications
              </p>
              <p className="mb-5 mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400 md:mt-4 md:text-base">
                You have {notifications.filter((n) => !n.read).length} unread messages.
              </p>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-5 h-min flex items-center max-w-full py-4 px-4 dark:border-zinc-800">
              <div>
                <p className="text-zinc-950 dark:text-white font-medium mb-1">
                  Push Notifications
                </p>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium">
                  Send notifications to device.
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={pushNotificationsEnabled}
                onClick={togglePushNotifications}
                className={`peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${
                  pushNotificationsEnabled ? "bg-primary" : "bg-input"
                } ms-auto`}
              >
                <span
                  className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ${
                    pushNotificationsEnabled ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
            <ul className="space-y-2">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`p-3 rounded-md ${
                    notification.read ? "bg-gray-200" : "bg-orange-100"
                  }`}
                >
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-sm text-gray-600">{notification.time}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={toggleModal}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Close
              </button>
              <button
                onClick={markAllAsRead}
                className="px-4 py-2 bg-black text-white rounded-lg hover:bg-orange-500"
              >
                Mark All as Read
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationsCard;
