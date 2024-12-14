'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      // Construit une URL avec les paramètres de recherche
      const query = new URLSearchParams({
        searchTerm: searchTerm.trim(),
      }).toString();

      router.push(`/biens-immobiliers?${query}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="relative h-[720px] flex items-center justify-start overflow-hidden bg-black text-white">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover "
        src="/videos/home.mp4"
      />
      <div className="absolute inset-0 flex items-center justify-start w-full h-full">
        <div className="relative w-full h-full overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-orange-300 opacity-40"
            style={{
              clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)',
            }}
          />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-left text-white font-serif px-8">
            <h2 className="text-3xl font-semibold mb-4 font-DancingScript">
              Trouvez le chez-vous qui vous ressemble
            </h2>

            {/* Barre de recherche et bouton sur la même ligne */}
            <div className="flex items-center mt-6 space-x-0">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown} // Ajouter la fonction pour la touche Entrée
                placeholder="Entrez une adresse, un pays, ..."
                className="px-4 py-2 w-96 rounded-l-xl
                 text-black border border-r-0" // Suppression de l'espace entre l'input et le bouton
              />
            <button
              onClick={handleSearch}
              className="px-6 py-2 bg-gradient-to-r from-orange-400 to-red-600 text-white rounded-r-xl hover:bg-red-600 hover:text-black transition-all"
            >
              Rechercher
            </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
