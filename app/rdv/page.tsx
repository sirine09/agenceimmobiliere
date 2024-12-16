'use client';

import React, { useState } from 'react';

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    agent: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const agents = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Samuel Brown' },
    { id: 3, name: 'Jane Smith' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Formulaire soumis:', formData);
  };

  return (
    <div
      className="flex flex-col items-center justify-center px-4 h-screen"
      style={{
        backgroundImage: "url('images/autres/pr.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="bg-white p-4 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold text-orange-600 mb-3">Prendre Rendez-vous</h1>
        {submitted ? (
          <div className="text-center">
            <h2 className="text-lg font-semibold text-green-600">Merci pour votre demande !</h2>
            <p className="mt-3 text-gray-700">
              Nous avons bien reçu votre demande de rendez-vous. Un membre de notre équipe vous contactera sous peu.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm mb-1">Nom complet</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Entrez votre nom"
                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-orange-600 text-sm"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Entrez votre email"
                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-orange-600 text-sm"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm mb-1">Téléphone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Entrez votre numéro"
                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-orange-600 text-sm"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm mb-1">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-orange-600 text-sm"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm mb-1">Heure</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-orange-600 text-sm"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm mb-1">Agent</label>
              <select
                name="agent"
                value={formData.agent}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-orange-600 text-sm"
              >
                <option value="" disabled>
                  Sélectionnez un agent
                </option>
                {agents.map((agent) => (
                  <option key={agent.id} value={agent.name}>
                    {agent.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700 transition-all text-sm"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AppointmentPage;
