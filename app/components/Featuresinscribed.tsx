'use client';

import PropertyCard from './PropertyCard'; // Import your PropertyCard component
enum PropertyType {
  Buy = 'buy',
  Rent = 'rent',
}



// Propriétés en vedette
const properties = [
  {
    id: '1',
    title: 'Maison de luxe à Paris',
    imageUrl: '/images/properties/maisondeluxe.jpg',
    price: 950000,
    location: 'Paris',
    rating: 5,
    type: PropertyType.Buy,
  },
  {
    id: '2',
    title: 'Appartement en bord de Rhône',
    imageUrl: '/images/properties/appartement_lyon.jpg',
    price: 420000,
    location: 'Lyon',
    rating: 3,
    type: PropertyType.Rent,
  },
];

const FeaturedProperties = () => {
  return (
    <>
      

      <section className="p-6 mt-12 ">
        {/* Titre centré avec une police élégante et couleur personnalisée */}
        <h2 className="text-3xl font-bold text-center text-gray-800
         font-DancingScript mb-16 ">
          Exclusivités
        </h2>

        {/* Affichage des propriétés */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </section>

      {/* Section Acheter, Louer, Déposer un bien */}
      <div className="mt-10 mb-10">
  













  
  <div className=" sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
    {[
      {
        title: 'Chercher un bien',
        description:
          'Explorez des propriétés uniques avec une expérience visuelle captivante et découvrez des offres exclusives introuvables ailleurs.',
        buttonText: 'Voir plus',
        link: `/properties`,
        imageUrl: '/images/autres/achat.jpg',
      },
      
    ].map((option, index) => (
      <div
        key={index}
        className="flex flex-col sm:flex-row items-center justify-center text-center border border-orange-500 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 mx-auto"
      >
        {/* Image agrandie */}
        <img
          src={option.imageUrl}
          alt={option.title}
          className="w-full sm:w-1/2 h-64 object-cover rounded-lg mb-6 sm:mb-0 sm:mr-8"
        />

        {/* Texte agrandi */}
        <div className="sm:w-1/2">
          <h4 className="text-2xl font-semibold text-orange-600 mb-4">{option.title}</h4>
          <p className="text-lg text-gray-600 mb-6">{option.description}</p>
          <a 
            href={option.link}
            className="mt-6 bg-orange-500 text-white px-10 py-4 text-lg rounded-lg hover:bg-orange-700 transition-all duration-200 transform hover:scale-105"
          >
            {option.buttonText}

</a>

              </div>
            </div>
          ))}
        </div>
      </div>
      






    </>
  );
};

export default FeaturedProperties;
