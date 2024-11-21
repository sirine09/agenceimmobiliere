"use client";

import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState(''); // Ajout du numéro de téléphone

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', { name, email, message, phone });
  };

  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/autres/agent1.jpg)' }}>
      {/* L'image de fond */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" /> {/* Filtre d'opacité pour rendre le fond moins intrusif */}

      <div className="relative z-10 flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">
        Contacter l'équipe
      </h1>

        
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-xl w-full space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Numéro de téléphone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="input w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="input w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white py-3 rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:via-orange-600 hover:to-orange-700 transition duration-200"
          >
            Envoyer
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactForm;

