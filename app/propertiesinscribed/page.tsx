// app/properties/page.tsx
"use client";

import { useRouter } from 'next/navigation';
import Header from '../components/Headerinscribed';
import Footer from '../components/Footerinscribed';
import  PropertyList from '../components/PropertyListinscribed'; 
const PropertyPage = ({ params }: { params: { id: number } }) => {
  const router = useRouter();
  const { id } = params;

  const handleSeeMore = () => {
    console.log('Voir plus cliqué !'); // Vous pouvez le rediriger ou charger plus d'éléments
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-6">
        <PropertyList propertyId={id} />
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSeeMore}
            className="flex items-center gap-2 px-6 py-2 text-white bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 rounded-full hover:bg-gradient-to-l transition-all"
          >
            Voir plus
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyPage;
