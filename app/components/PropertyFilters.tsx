// app/components/PropertyFilters.tsx
import { useState } from 'react';

const PropertyFilters = () => {
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = () => {
    console.log('Recherche de propriétés avec filtres:', { location, minPrice, maxPrice });
    // Ici, vous pourriez ajouter une logique pour filtrer les propriétés
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg mb-6">
      <h2 className="text-lg font-bold mb-4">Filtres de recherche</h2>
      <div className="grid grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Localisation"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="Prix min"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="Prix max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="input"
        />
      </div>
      <button onClick={handleSearch} className="bg-blue-600 text-white py-2 px-4 rounded mt-4">Rechercher</button>
    </div>
  );
};

export default PropertyFilters;
