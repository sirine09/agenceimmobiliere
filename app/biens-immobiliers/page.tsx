'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PropertyCard from '../components/PropertyCard';
import Mapbox from '../components/Mapbox';

const PropertyResults = () => {
  const searchParams = useSearchParams();
  const initialSearchTerm = searchParams.get('searchTerm') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  const properties = [
    { id: '1', title: 'Maison de luxe à Paris', imageUrl: '/images/properties/maisondeluxe.jpg', price: 950000, location: 'Paris', rating: 5, type: 'buy', latitude: 48.8566, longitude: 2.3522 },
    { id: '2', title: 'Appartement en bord de Rhône', imageUrl: '/images/properties/appartement_lyon.jpg', price: 420000, location: 'Lyon', rating: 3, type: 'rent', latitude: 45.764, longitude: 4.8357 },
    { id: '3', title: 'Villa contemporaine à Nice', imageUrl: '/images/properties/villamoderne.jpg', price: 750000, location: 'Nice', rating: 4, type: 'buy', latitude: 43.7102, longitude: 7.262 },
    { id: '4', title: 'Maison de campagne à Bordeaux', imageUrl: '/images/properties/maisondecompagne.jpg', price: 550000, location: 'Bordeaux', rating: 5, type: 'buy', latitude: 44.8378, longitude: -0.5792 },
    { id: '5', title: 'Studio moderne à Marseille', imageUrl: '/images/properties/studiomoderne.jpg', price: 220000, location: 'Marseille', rating: 4, type: 'rent', latitude: 43.2965, longitude: 5.3698 },
    { id: '6', title: 'Chalet de montagne à Chamonix', imageUrl: '/images/properties/chalet.avif', price: 680000, location: 'Chamonix', rating: 5, type: 'buy', latitude: 45.9237, longitude: 6.8694 },
  ];

  const [filterType, setFilterType] = useState<'buy' | 'rent' | 'all'>('all');
  const [minRating, setMinRating] = useState(0);
  const [minPrice, setMinPrice] = useState<number | ''>(''); 
  const [maxPrice, setMaxPrice] = useState<number | ''>(''); 

  const filteredProperties = properties.filter((property) => {
    const matchesSearchTerm =
      searchTerm
        ? property.title.toLowerCase().includes(searchTerm.toLowerCase()) || property.location.toLowerCase().includes(searchTerm.toLowerCase())
        : true;

    const matchesType = filterType === 'all' || property.type === filterType;
    const matchesRating = property.rating >= minRating;
    const matchesMinPrice = minPrice !== '' ? property.price >= minPrice : true;
    const matchesMaxPrice = maxPrice !== '' ? property.price <= maxPrice : true;

    return matchesSearchTerm && matchesType && matchesRating && matchesMinPrice && matchesMaxPrice;
  });

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-full md:w-1/2 p-4 overflow-y-auto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 w-full max-w-xs rounded-md text-gray-700 bg-white shadow-sm border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
        </div>

        {/* Filtres */}
        <div className="mb-6">
          <div className="flex justify-start gap-2 mb-4">
            <button
              onClick={() => setFilterType('buy')}
              className={`px-3 py-1 rounded-md text-sm ${filterType === 'buy' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Acheter
            </button>
            <button
              onClick={() => setFilterType('rent')}
              className={`px-3 py-1 rounded-md text-sm ${filterType === 'rent' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Louer
            </button>
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 rounded-md text-sm ${filterType === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              Tous
            </button>
          </div>

          <div className="mb-4">
            <label htmlFor="rating" className="text-sm font-medium text-gray-700">Note :</label>
            <select
              id="rating"
              onChange={(e) => setMinRating(Number(e.target.value))}
              value={minRating}
              className="mt-1 bg-gray-200 p-2 rounded-md text-sm w-28"
            >
              <option value={0}>Toutes</option>
              <option value={1}>1 étoile</option>
              <option value={2}>2 étoiles</option>
              <option value={3}>3 étoiles</option>
              <option value={4}>4 étoiles</option>
              <option value={5}>5 étoiles</option>
            </select>
          </div>

          <div className="flex gap-3 mb-4">
            <div className="flex flex-col">
              <label htmlFor="minPrice" className="text-sm font-medium text-gray-700">Prix Min :</label>
              <input
                type="number"
                id="minPrice"
                value={minPrice !== '' ? minPrice : ''}
                onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : '')}
                className="bg-gray-200 p-2 rounded-md text-sm"
                placeholder="Min"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="maxPrice" className="text-sm font-medium text-gray-700">Prix Max :</label>
              <input
                type="number"
                id="maxPrice"
                value={maxPrice !== '' ? maxPrice : ''}
                onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : '')}
                className="bg-gray-200 p-2 rounded-md text-sm"
                placeholder="Max"
              />
            </div>
          </div>
        </div>

        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>

      <div className="w-full md:w-1/2 p-4">
        <Mapbox properties={filteredProperties} />
      </div>
    </div>
  );
};

export default PropertyResults;

