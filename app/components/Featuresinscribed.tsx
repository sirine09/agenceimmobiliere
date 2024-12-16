'use client';


import PropertyCard from './PropertyCardinscribed'; // Import your PropertyCard component
enum PropertyType {
  Buy = 'buy',
  Rent = 'rent',
}



// Propriétés en vedette
const properties = [
  {
    id: 1,
    title: 'Villa jumelée en vente',
    imageUrl: '/images/properties/maisondeluxe.jpg',
    price: 950000,
    location: 'Kelibia, شارع الشهيد حمادي الغربي',
    description: 'Superbe villa jumelée moderne avec vue sur la mer, parfaite pour une famille.',
    similarImages: [
      '/images/properties/maisondeluxe_1.jpg',
      '/images/properties/maisondeluxe_2.jpg',
      '/images/properties/maisondeluxe_3.jpg',
    ],
  },
  {
    id: 2,
    title: 'S+1 en location',
    imageUrl: '/images/properties/appartement_lyon.jpg',
    price: 420000,
    location: 'Tunis Ennasr - Ennasr 2',
    description: 'Charmant appartement S+1 idéalement situé à Ennasr avec toutes les commodités.',
    similarImages: [
      '/images/properties/appartement_lyon_1.jpg',
      '/images/properties/appartement_lyon_2.jpg',
      '/images/properties/appartement_lyon_3.jpg',
      '/images/properties/appartement_lyon_4.jpg',
      '/images/properties/appartement_lyon_5.jpg',
    ],
  },
];

const FeaturedProperties = () => {
  return (
    <>
      

      <section className="p-6 mt-12 ">
        {/* Titre centré avec une police élégante et couleur personnalisée */}
        <h2 className="text-3xl font-bold text-center text-orange-500
         font-DancingScript mb-16 ">
          Exclusivités
        </h2>

        {/* Affichage des propriétés */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property}
             />
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
        link: `/propertiesinscribed`,
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
