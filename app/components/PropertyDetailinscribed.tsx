'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface PropertyDetailProps {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  location: string;
  description: string;
  similarImages: string[];
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({
  id,
  title,
  imageUrl,
  price,
  location,
  description,
  similarImages,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? similarImages.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === similarImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 bg-white shadow-lg rounded-xl">
      {/* Section des images */}
      <div className="w-full lg:w-1/3 flex flex-col items-center">
        <div className="relative w-full h-72">
          <img
            src={similarImages[currentIndex]}
            alt={`Image principale de la propriété`}
            className="rounded-lg object-cover w-full h-full shadow-lg"
          />
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full shadow-lg hover:bg-opacity-70"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full shadow-lg hover:bg-opacity-70"
          >
            ❯
          </button>
        </div>
        <p className="mt-2 text-center text-sm text-gray-600">
          {currentIndex + 1} / {similarImages.length}
        </p>
      </div>

      {/* Section des détails de la propriété */}
      <div className="w-full lg:w-2/3 flex flex-col">
        <h1 className="text-3xl font-semibold text-orange-600">{title}</h1>
        <p className="text-lg text-gray-600 mt-2">{location}</p>
        <p className="text-2xl font-bold text-orange-400 mt-4">${price}</p>
        <p className="mt-4 text-gray-700">{description}</p>

        <div className="mt-6 flex gap-4">
          <Link
            href={`/contactinscribed`}
            className="inline-block px-8 py-3 text-white bg-orange-600 hover:bg-orange-700 rounded-xl transition-all duration-300"
          >
            Contacter
          </Link>
          {/* Updated "Prendre un rendez-vous" button to redirect */}
          <Link
            href={`/rdv`}
            className="inline-block px-8 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-300"
          >
            Prendre un rendez-vous
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
