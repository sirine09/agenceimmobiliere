'use client';

import React, { useState } from 'react';

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    agent: '', // Ajout d'un champ pour l'agent
  });

  const [submitted, setSubmitted] = useState(false);

  // Exemple de liste d'agents disponibles
  const agents = [
    { id: 1, name: 'Agent 1' },
    { id: 2, name: 'Agent 2' },
    { id: 3, name: 'Agent 4' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Ici, vous pouvez envoyer les données à votre backend ou afficher un message de confirmation.
    console.log('Formulaire soumis:', formData);
  };
  // relative w-full h-screen bg-cover bg-center
  return (
    <div
    className="flex flex-col items-center justify-center  px-4 h-screen "
    style={{
      backgroundImage: "url('images/autres/pr.jpeg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-orange-600 mb-4">Prendre Rendez-vous</h1>
        {submitted ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-green-600">Merci pour votre demande !</h2>
            <p className="mt-4 text-gray-700">
              Nous avons bien reçu votre demande de rendez-vous. Un membre de notre équipe vous contactera sous peu.
            </p>
            <p className="mt-4 text-gray-600">
              Nous vous enverrons la confirmation, et vous pouvez par ailleurs contacter votre agent pour toute question.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Nom complet</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Entrez votre nom complet"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Entrez votre adresse email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Téléphone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Entrez votre numéro de téléphone"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Date de visite</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Heure de visite</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Choisir un agent</label>
              <select
                name="agent"
                value={formData.agent}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
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
              className="w-full py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all duration-300"
            >
              Envoyer la demande
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AppointmentPage;
