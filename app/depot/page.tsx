"use client";

import React from "react";

const SubmitProperty: React.FC = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // Extract values from the form
    const images = formData.getAll("images") as File[];

    const data = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      type: formData.get("type") as "location" | "vente",
      price: parseFloat(formData.get("price") as string),
      location: formData.get("location") as string,
      surface: parseFloat(formData.get("surface") as string),
      numberOfRooms: parseInt(formData.get("numberOfRooms") as string, 10),
      contactEmail: formData.get("contactEmail") as string,
      contactPhone: formData.get("contactPhone") as string,
      images,
    };

    console.log("Submitted data:", data);

    // Logic for submission can be added here (e.g., API call)
  };

  return (
    <div
      className="bg-center flex items-center justify-center min-h-screen"
      style={{ backgroundImage: "url('/images/autres/depot.jpg')" }}
    >
      <div className="w-full max-w-5xl p-8 bg-white bg-opacity-75 shadow-xl rounded-lg overflow-y-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">
          Déposer une annonce
        </h1>
        <form
          onSubmit={onSubmit}
          encType="multipart/form-data"
          className="space-y-6"
        >
          {/* Titre de l'annonce */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Titre de l'annonce
            </label>
            <input
              type="text"
              name="title"
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Exemple : Appartement à louer"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Décrivez les caractéristiques principales du bien"
              rows={4}
            ></textarea>
          </div>

          {/* Type */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Type
            </label>
            <select
              name="type"
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="location">Location</option>
              <option value="vente">Vente</option>
            </select>
          </div>

          {/* Prix */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Prix (en Dianrs)
            </label>
            <input
              type="number"
              name="price"
              required
              min="1"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Prix en euros"
            />
          </div>

          {/* Localisation */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Localisation
            </label>
            <input
              type="text"
              name="location"
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Exemple : Paris, Lyon, Marseille"
            />
          </div>

          {/* Surface */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Surface (en m²)
            </label>
            <input
              type="number"
              name="surface"
              required
              min="1"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Surface en mètres carrés"
            />
          </div>

          {/* Nombre de pièces */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Nombre de pièces
            </label>
            <input
              type="number"
              name="numberOfRooms"
              required
              min="1"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Exemple : 3"
            />
          </div>

          {/* Email de contact */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Email de contact
            </label>
            <input
              type="email"
              name="contactEmail"
              required
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Adresse email"
            />
          </div>

          {/* Téléphone de contact */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Téléphone de contact
            </label>
            <input
              type="text"
              name="contactPhone"
              required
              pattern="[0-9]{10}"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Numéro de téléphone"
            />
          </div>

          {/* Images */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Photos du bien
            </label>
            <input
              type="file"
              name="images"
              multiple
              accept="image/*"
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Bouton de soumission */}
          <button
            type="submit"
            className="w-full py-3 px-6 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Déposer l'annonce
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubmitProperty;
