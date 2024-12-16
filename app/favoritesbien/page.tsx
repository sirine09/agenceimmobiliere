"use client";

import React, { useEffect, useState } from "react";
import { useFavorites } from "../context/FavoritesContext";
import PropertyCardinscribed from "../components/PropertyCardinscribed";

// Exemple de données fictives pour les propriétés
const propertyData = [
  { id: 1, title: 'Villa jumelée en vente', imageUrl: '/images/properties/maisondeluxe.jpg', price: 950000, location: 'Kelibia, شارع الشهيد حمadi الغربي', rating: 5, type: "buy", },
  { id: 2, title: 'S+1 en location', imageUrl: '/images/properties/appartement_lyon.jpg', price: 420000, location: 'Tunis Ennasr - Ennasr 2', rating: 3, type: "rent", },
  { id: 3, title: 'Villa individuelle en vente', imageUrl: '/images/properties/villamoderne.jpg', price: 750000, location: 'Kelibia, Kelibia la blanche', rating: 4, type: "buy", },
  { id: 4, title: 'S+4 en location', imageUrl: '/images/properties/maisondecompagne.jpg', price: 550000, location: 'Les Berges Du Lac Tunis - Le Lac 2', rating: 5, type: "buy", },
  { id: 5, title: 'S+2 en vente à Nabeul AFH', imageUrl: '/images/properties/studiomoderne.jpg', price: 220000, location: 'Nabeul, Nabeul AFH', rating: 4, type: "rent", },
  { id: 6, title: 'Duplex en vente', imageUrl: '/images/properties/chalet.avif', price: 680000, location: 'Kelibia, Cité merdes', rating: 5, type: "buy", },
];

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const [favoriteProperties, setFavoriteProperties] = useState([]);

  useEffect(() => {
    const fetchFavoriteProperties = () => {
      const filteredData = propertyData.filter((property) =>
        favorites.includes(property.id)
      );
      setFavoriteProperties(filteredData);
    };

    fetchFavoriteProperties();
  }, [favorites]);

  return (
    <div style={{
      backgroundColor: "#fff7e6", // Fond orange clair
      padding: "20px",
      minHeight: "100vh",
      fontFamily: "'Poppins', sans-serif",
    }}>
      {/* Titre avec style orange */}
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-8">Mes biens favoris</h1>

      {favoriteProperties.length > 0 ? (
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          flex: "0 0 250px",
        }}>
          {favoriteProperties.map((property) => (
            <PropertyCardinscribed
            key={property.id}
            id={property.id}
            title={property.title}
            imageUrl={property.imageUrl}
            price={property.price}
            location={property.location}
            rating={property.rating}
            type={property.type}
            onAddToFavorites={() => {}}
            isFavorite={true}
            style={{
              width: '250px', // Largeur fixe
              backgroundColor: "#ffd699",
              border: "1px solid #f97316",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
          ))}
        </div>
      ) : (
        <p style={{
          color: "#333",
          textAlign: "center",
          fontSize: "18px",
        }}>
          Aucune propriété marquée comme favorite
        </p>
      )}
    </div>
  );
};

export default FavoritesPage;
