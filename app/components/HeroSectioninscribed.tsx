'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [clientName, setClientName] = useState('');
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement | null>(null); // Spécifiez le type de la référence vidéo

  // Retrieve client name from localStorage when component mounts
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedName = localStorage.getItem('clientName');
      if (storedName) {
        setClientName(storedName);
      }
    }
  }, []);

  // Handle search
  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      const query = new URLSearchParams({
        searchTerm: searchTerm.trim(),
      }).toString();
      router.push('/biens-immobiliers?${query}');
    }
  };

  // Handle logout
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('clientName');
      // You might want to add more logout logic here (e.g., clearing tokens)
    }
  };

  // Handle "Enter" key press for search
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Video playback logic
  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const stopAtSecond = 64; // The second where you want to stop the video

      // Listen to the 'timeupdate' event to check the current playback time
      const handleTimeUpdate = () => {
        if (videoElement.currentTime >= stopAtSecond) {
          videoElement.pause();  // Pause the video at the specified second
          videoElement.currentTime = 0; // Reset the video to the start
          videoElement.play(); // Optionally start the video again from the beginning
        }
      };

      videoElement.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  return (
    <section className="relative h-[720px] flex items-center justify-start overflow-hidden bg-black text-white">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
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
            <h1 className="text-4xl font-semibold mb-4 font-DancingScript text-black">
              Bienvenue {clientName || 'Utilisateur'}
            </h1>
            <h2 className="text-2xl font-semibold mb-4 font-DancingScript">
              Trouvez le chez-vous qui vous ressemble
            </h2>

            {/* Barre de recherche et bouton sur la même ligne */}
            <div className="flex items-center mt-6 space-x-0">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Entrez une adresse, un pays, ..."
                className="px-4 py-2 w-96 rounded-l-xl text-black border border-r-0"
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
