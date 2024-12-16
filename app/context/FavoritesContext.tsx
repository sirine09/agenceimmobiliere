"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';

type FavoritesContextType = {
  favorites: number[];
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const addToFavorites = (id: number) => {
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };

  const removeFromFavorites = (id: number) => {
    setFavorites(favorites.filter((favId) => favId !== id));
  };

  const isFavorite = (id: number) => favorites.includes(id);

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
