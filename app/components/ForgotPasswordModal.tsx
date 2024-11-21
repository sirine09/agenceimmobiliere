"use client";

import { useState } from "react";

const ForgotPasswordModal = ({ isOpen, toggleModal }: { isOpen: boolean; toggleModal: () => void }) => {
  return (
    <div>
      {/* Modal Mot de passe oublié */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-96 p-6 shadow-lg relative">
            {/* Bouton de fermeture */}
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            {/* Titre */}
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
              Réinitialiser votre mot de passe
            </h2>

            {/* Formulaire de réinitialisation */}
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Entrez votre email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 to-orange-600 text-white py-2 rounded-md hover:shadow-lg transition duration-200"
              >
                Réinitialiser
              </button>
            </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Un lien de réinitialisation sera envoyé à votre email.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPasswordModal;
