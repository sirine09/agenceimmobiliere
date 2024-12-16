// 'use client';
// import { useState } from 'react';
// import PropertyCard from './PropertyCard';

// // Enum to define property types
// enum PropertyType {
//   Buy = 'buy',
//   Rent = 'rent',
// }

// const PropertyList = ({ propertyId }: { propertyId: string }) => {
//   // Remplacer par des données réelles
//   const properties = [
//     { id: '1', title: 'Maison de luxe à Paris', imageUrl: '/images/properties/maisondeluxe.jpg', price: 950000, location: 'Paris', rating: 5, type: PropertyType.Buy },
//     { id: '2', title: 'Appartement en bord de Rhône', imageUrl: '/images/properties/appartement_lyon.jpg', price: 420000, location: 'Lyon', rating: 3, type: PropertyType.Rent },
//     { id: '3', title: 'Villa contemporaine à Nice', imageUrl: '/images/properties/villamoderne.jpg', price: 750000, location: 'Nice', rating: 4, type: PropertyType.Buy },
//     { id: '4', title: 'Maison de campagne à Bordeaux', imageUrl: '/images/properties/maisondecompagne.jpg', price: 550000, location: 'Bordeaux', rating: 5, type: PropertyType.Buy },
//     { id: '5', title: 'Studio moderne à Marseille', imageUrl: '/images/properties/studiomoderne.jpg', price: 220000, location: 'Marseille', rating: 4, type: PropertyType.Rent },
//     { id: '6', title: 'Chalet de montagne à Chamonix', imageUrl: '/images/properties/chalet.avif', price: 680000, location: 'Chamonix', rating: 5, type: PropertyType.Buy },
//   ];

//   // État pour les filtres
//   const [searchTerm, setSearchTerm] = useState(''); // Terme de recherche
//   const [filterType, setFilterType] = useState<'buy' | 'rent' | 'all'>('all');
//   const [minRating, setMinRating] = useState(0);
//   const [minPrice, setMinPrice] = useState<number | ''>(''); 
//   const [maxPrice, setMaxPrice] = useState<number | ''>('');

//   // Filtrer les propriétés en fonction du type, de la note minimale et de la plage de prix, et du terme de recherche
//   const filteredProperties = properties.filter((property) => {
//     const matchesSearchTerm = searchTerm
//       ? property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         property.location.toLowerCase().includes(searchTerm.toLowerCase())
//       : true;
    
//     const matchesType = filterType === 'all' || property.type === filterType;
//     const matchesRating = property.rating >= minRating;
//     const matchesMinPrice = minPrice !== '' ? property.price >= minPrice : true;
//     const matchesMaxPrice = maxPrice !== '' ? property.price <= maxPrice : true;

//     return matchesSearchTerm && matchesType && matchesRating && matchesMinPrice && matchesMaxPrice;
//   });

//   // Filtrer les propriétés par ID si l'ID est fourni
//   const finalProperties = propertyId ? filteredProperties.filter((property) => property.id === propertyId) : filteredProperties;

//   return (
//     <div>
//       {/* Champ de recherche */}
//       <div className="mb-6 px-4">
//         <input
//           type="text"
//           placeholder="Rechercher par adresse, ville, ..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="px-4 py-2 w-96 rounded-md text-black"
//         />
//       </div>

//       {/* Sélecteurs de filtres */}
//       <div className="filter-controls flex justify-between items-center mb-6 px-4">
//         {/* Boutons de type (acheter/louer) */}
//         <div className="flex space-x-4">
//           <button
//             onClick={() => setFilterType('buy')}
//             className={`px-3 py-1 rounded-md text-sm ${filterType === 'buy' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
//           >
//             Acheter
//           </button>
//           <button
//             onClick={() => setFilterType('rent')}
//             className={`px-3 py-1 rounded-md text-sm ${filterType === 'rent' ? 'bg-orange-600 text-white' : 'bg-gray-200'}`}
//           >
//             Louer
//           </button>
//           <button
//             onClick={() => setFilterType('all')}
//             className={`px-3 py-1 rounded-md text-sm ${filterType === 'all' ? 'bg-orange-700 text-white' : 'bg-gray-200'}`}
//           >
//             Tous
//           </button>
//         </div>

//         {/* Sélecteur de note minimale */}
//         <div className="flex space-x-2 items-center">
//           <label htmlFor="rating" className="text-sm font-medium">Note :</label>
//           <select
//             id="rating"
//             onChange={(e) => setMinRating(Number(e.target.value))}
//             value={minRating}
//             className="bg-gray-200 p-2 rounded-md text-sm"
//           >
//             <option value={0}>Toutes</option>
//             <option value={1}>1 étoile</option>
//             <option value={2}>2 étoiles</option>
//             <option value={3}>3 étoiles</option>
//             <option value={4}>4 étoiles</option>
//             <option value={5}>5 étoiles</option>
//           </select>
//         </div>

//         {/* Filtres de prix */}
//         <div className="flex space-x-2 items-center">
//           <label htmlFor="minPrice" className="text-sm font-medium">Prix :</label>
//           <input
//             type="number"
//             id="minPrice"
//             placeholder="Min"
//             value={minPrice !== '' ? minPrice : ''}
//             onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : '')}
//             className="bg-gray-200 p-1 rounded-md text-sm w-20"
//           />
//           <span>-</span>
//           <input
//             type="number"
//             id="maxPrice"
//             placeholder="Max"
//             value={maxPrice !== '' ? maxPrice : ''}
//             onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : '')}
//             className="bg-gray-200 p-1 rounded-md text-sm w-20"
//           />
//         </div>
//       </div>

//       {/* Affichage des propriétés filtrées */}
//       <div className="grid grid-cols-2 gap-4 mt-4">
//         {finalProperties.map((property) => (
//           <PropertyCard key={property.id} {...property} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PropertyList;
'use client';
import { useState } from 'react';
import PropertyCard from './PropertyCard';

// Enum to define property types
enum PropertyType {
  Buy = 'buy',
  Rent = 'rent',
}

const PropertyList = ({ propertyId }: { propertyId: number }) => {
  // Remplacer par des données réelles
  const properties = [
    { id: 1, title: 'Villa jumelée en vente', imageUrl: '/images/properties/maisondeluxe.jpg', price: 950000, location: 'Kelibia, شارع الشهيد حمادي الغربي', rating: 5, type: PropertyType.Buy },
    { id: 2, title: 'S+1 en location', imageUrl: '/images/properties/appartement_lyon.jpg', price: 420000, location: 'Tunis Ennasr - Ennasr 2', rating: 3, type: PropertyType.Rent },
    { id: 3, title: 'Villa individuelle en vente', imageUrl: '/images/properties/villamoderne.jpg', price: 750000, location: 'Kelibia, Kelibia la blanche', rating: 4, type: PropertyType.Buy },
    { id: 4, title: 'S+4 en location', imageUrl: '/images/properties/maisondecompagne.jpg', price: 550000, location: 'Les Berges Du Lac Tunis - Le Lac 2', rating: 5, type: PropertyType.Buy },
    { id: 5, title: 'S+2 en vente à Nabeul AFH', imageUrl: '/images/properties/studiomoderne.jpg', price: 220000, location: 'Nabeul, Nabeul AFH', rating: 4, type: PropertyType.Rent },
    { id: 6, title: 'Duplex en vente', imageUrl: '/images/properties/chalet.avif', price: 680000, location: 'Kelibia, Cité merdes', rating: 5, type: PropertyType.Buy },
  ];

  // État pour les filtres
  const [searchTerm, setSearchTerm] = useState(''); // Terme de recherche
  const [filterType, setFilterType] = useState<'buy' | 'rent' | 'all'>('all');
  const [excludedRating, setExcludedRating] = useState<number | null>(null);
  const [minPrice, setMinPrice] = useState<number | ''>(''); 
  const [maxPrice, setMaxPrice] = useState<number | ''>('');

  // Filtrer les propriétés en fonction du type, de la note minimale et de la plage de prix, et du terme de recherche
  const filteredProperties = properties.filter((property) => {
    const matchesSearchTerm = searchTerm
      ? property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    
    const matchesType = filterType === 'all' || property.type === filterType;
    const matchesRating = excludedRating === null || property.rating === excludedRating;
    const matchesMinPrice = minPrice !== '' ? property.price >= minPrice : true;
    const matchesMaxPrice = maxPrice !== '' ? property.price <= maxPrice : true;

    return matchesSearchTerm && matchesType && matchesRating && matchesMinPrice && matchesMaxPrice;
  });

  // Filtrer les propriétés par ID si l'ID est fourni
  const finalProperties = propertyId ? filteredProperties.filter((property) => property.id === propertyId) : filteredProperties;

  return (
    <div>
      {/* Champ de recherche */}
      <div className="mb-6 px-4">
        <input
          type="text"
          placeholder="Rechercher par adresse, ville, ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 w-96 rounded-md text-black"
        />
      </div>

      {/* Sélecteurs de filtres */}
      <div className="filter-controls flex justify-between items-center mb-6 px-4">
        {/* Boutons de type (acheter/louer) */}
        <div className="flex space-x-4">
          <button
            onClick={() => setFilterType('buy')}
            className={`px-3 py-1 rounded-md text-sm ${filterType === 'buy' ? 'bg-orange-500 text-white' : 'bg-gray-200'}`}
          >
            Acheter
          </button>
          <button
            onClick={() => setFilterType('rent')}
            className={`px-3 py-1 rounded-md text-sm ${filterType === 'rent' ? 'bg-orange-600 text-white' : 'bg-gray-200'}`}
          >
            Louer
          </button>
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1 rounded-md text-sm ${filterType === 'all' ? 'bg-orange-700 text-white' : 'bg-gray-200'}`}
          >
            Tous
          </button>
        </div>

        {/* Sélecteur de note minimale */}
        <div className="flex space-x-2 items-center">
          <label htmlFor="rating" className="text-sm font-medium">Note :</label>
          <select
            id="rating"
            onChange={(e) => setExcludedRating(Number(e.target.value))}
            value={excludedRating ?? 0}
            className="bg-gray-200 p-2 rounded-md text-sm"
          >
            <option value={0}>Toutes</option>
            <option value={1}>1 étoile</option>
            <option value={2}>2 étoiles</option>
            <option value={3}>3 étoiles</option>
            <option value={4}>4 étoiles</option>
            <option value={5}>5 étoiles</option>
          </select>
        </div>

        {/* Filtres de prix */}
        <div className="flex space-x-2 items-center">
          <label htmlFor="minPrice" className="text-sm font-medium">Prix :</label>
          <input
            type="number"
            id="minPrice"
            placeholder="Min"
            value={minPrice !== '' ? minPrice : ''}
            onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : '')}
            className="bg-gray-200 p-1 rounded-md text-sm w-20"
          />
          <span>-</span>
          <input
            type="number"
            id="maxPrice"
            placeholder="Max"
            value={maxPrice !== '' ? maxPrice : ''}
            onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : '')}
            className="bg-gray-200 p-1 rounded-md text-sm w-20"
          />
        </div>
      </div>

      {/* Affichage des propriétés filtrées */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {finalProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyList;