'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PropertyCard from '../components/PropertyCardinscribed';
import Mapbox from '../components/Mapbox';

const PropertyResults = () => {
  const searchParams = useSearchParams();
  const initialSearchTerm = searchParams.get('searchTerm') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  enum PropertyType {
    Buy = 'buy',
    Rent = 'rent',
  }
  
  const properties = [
    {
      id: 1,
      title: 'Villa jumelée en vente',
      imageUrl: '/images/properties/maisondeluxe.jpg',
      price: 950000,
      location: 'Kelibia, شارع الشهيد حمادي الغربي',
      rating: 5,
      type: PropertyType.Buy,
      latitude: 36.8518, // Latitude de Kélibia
      longitude: 11.0943, // Longitude de Kélibia
    },
    {
      id: 2,
      title: 'S+1 en location',
      imageUrl: '/images/properties/appartement_lyon.jpg',
      price: 420000,
      location: 'Tunis Ennasr - Ennasr 2',
      rating: 3,
      type: PropertyType.Rent,
      latitude: 36.8457, // Latitude d’Ennasr 2
      longitude: 10.1844, // Longitude d’Ennasr 2
    },
    {
      id: 3,
      title: 'Villa individuelle en vente',
      imageUrl: '/images/properties/villamoderne.jpg',
      price: 750000,
      location: 'Kelibia, Kelibia la blanche',
      rating: 4,
      type: PropertyType.Buy,
      latitude: 36.8495, // Latitude de Kelibia La Blanche
      longitude: 11.0968, // Longitude de Kelibia La Blanche
    },
    {
      id: 4,
      title: 'S+4 en location',
      imageUrl: '/images/properties/maisondecompagne.jpg',
      price: 550000,
      location: 'Les Berges Du Lac Tunis - Le Lac 2',
      rating: 5,
      type: PropertyType.Rent,
      latitude: 36.8401, // Latitude du Lac 2
      longitude: 10.2443, // Longitude du Lac 2
    },
    {
      id: 5,
      title: 'S+2 en vente à Nabeul AFH',
      imageUrl: '/images/properties/studiomoderne.jpg',
      price: 220000,
      location: 'Nabeul, Nabeul AFH',
      rating: 4,
      type:PropertyType.Buy,
      latitude: 36.4524, // Latitude de Nabeul AFH
      longitude: 10.7357, // Longitude de Nabeul AFH
    },
    {
      id: 6,
      title: 'Duplex en vente',
      imageUrl: '/images/properties/chalet.avif',
      price: 680000,
      location: 'Kelibia, Cité merdes',
      rating: 5,
      type: PropertyType.Buy,
      latitude: 36.8512, // Latitude de Kélibia, Cité merdes
      longitude: 11.0923, // Longitude de Kélibia, Cité merdes
    },
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