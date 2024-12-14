// 'use client';

// import dynamic from 'next/dynamic';
// import { useEffect, useState } from 'react';
// import { Marker } from 'react-map-gl';

// const Map = dynamic(() => import('react-map-gl'), { ssr: false });

// const Mapbox = ({ properties }: { properties: { latitude: number; longitude: number; id: string; title: string }[] }) => {
//   const [accessToken, setAccessToken] = useState('');

//   useEffect(() => {
//     const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
//     if (token) {
//       setAccessToken(token);
//     } else {
//       console.error('Clé API Mapbox manquante. Vérifiez votre fichier .env.local.');
//     }
//   }, []);

//   if (!accessToken) {
//     return <div>Chargement de la carte...</div>;
//   }

//   // Calcul du centre de la carte en fonction des propriétés disponibles
//   const centerLatitude = properties.reduce((sum, prop) => sum + prop.latitude, 0) / properties.length || 46.603354;
//   const centerLongitude = properties.reduce((sum, prop) => sum + prop.longitude, 0) / properties.length || 1.888334;

//   return (
//     <div style={{ width: '100%', height: '100%' }}>
//       <Map
//         initialViewState={{
//           latitude: centerLatitude,
//           longitude: centerLongitude,
//           zoom: properties.length > 0 ? 6 : 5, // Ajuste le niveau de zoom en fonction du nombre de propriétés
//         }}
//         style={{ width: '100%', height: '100%' }}
//         mapStyle="mapbox://styles/mapbox/streets-v11"
//         mapboxAccessToken={accessToken}
//       >
//         {/* Affichage des points rouges pour chaque propriété */}
//         {properties.map((property) => (
//           <Marker
//             key={property.id}
//             latitude={property.latitude}
//             longitude={property.longitude}
//             offset={[0, -10]} // Ajuste la position du marqueur pour le centrer
//           >
//             {/* Point rouge pour chaque propriété */}
//             <div
//               style={{
//                 width: '12px', // Taille du marqueur
//                 height: '12px',
//                 backgroundColor: 'red', // Couleur rouge
//                 borderRadius: '50%', // Pour créer un cercle
//                 border: '2px solid white', // Bordure blanche autour du cercle pour le faire ressortir
//               }}
//               title={property.title} // Titre au survol du point
//             />
//           </Marker>
//         ))}
//       </Map>
//     </div>
//   );
// };

// export default Mapbox;

'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Marker } from 'react-map-gl';

const Map = dynamic(() => import('react-map-gl'), { ssr: false });

const Mapbox = ({ properties }: { properties: { latitude: number; longitude: number; id: string; title: string }[] }) => {
  const [accessToken, setAccessToken] = useState('');
  const [isMapReady, setIsMapReady] = useState(false); // Nouvel état pour vérifier que la carte est prête

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    if (token) {
      setAccessToken(token);
    } else {
      console.error('Clé API Mapbox manquante. Vérifiez votre fichier .env.local.');
    }
  }, []);

  useEffect(() => {
    // Définir isMapReady à true après que la carte a été rendue
    if (accessToken) {
      setIsMapReady(true);
    }
  }, [accessToken]);

  if (!accessToken || !isMapReady) {
    return <div>Chargement de la carte...</div>;
  }

  // Calcul de l'étendue des propriétés pour ajuster le zoom
  const latitudes = properties.map(prop => prop.latitude);
  const longitudes = properties.map(prop => prop.longitude);

  const minLatitude = Math.min(...latitudes);
  const maxLatitude = Math.max(...latitudes);
  const minLongitude = Math.min(...longitudes);
  const maxLongitude = Math.max(...longitudes);

  // Calcul du centre de la carte
  const centerLatitude = (minLatitude + maxLatitude) / 2;
  const centerLongitude = (minLongitude + maxLongitude) / 2;

  // Calcul du zoom en fonction de l'étendue géographique (bounding box)
  const latitudeDiff = maxLatitude - minLatitude;
  const longitudeDiff = maxLongitude - minLongitude;

  // Plus l'étendue est grande, plus le zoom est faible
  const zoom = Math.max(5, Math.min(10, 10 - Math.max(latitudeDiff, longitudeDiff) * 3));

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Map
        initialViewState={{
          latitude: centerLatitude,
          longitude: centerLongitude,
          zoom: zoom, // Utilisation du zoom dynamique calculé
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={accessToken}
      >
        {/* Affichage des points rouges pour chaque propriété */}
        {properties.map((property) => (
          <Marker
            key={property.id}
            latitude={property.latitude}
            longitude={property.longitude}
            offset={[0, -10]} // Ajuste la position du marqueur pour le centrer
          >
            {/* Point rouge pour chaque propriété */}
            <div
              style={{
                width: '12px', // Taille du marqueur
                height: '12px',
                backgroundColor: 'red', // Couleur rouge
                borderRadius: '50%', // Pour créer un cercle
                border: '2px solid white', // Bordure blanche autour du cercle pour le faire ressortir
              }}
              title={property.title} // Titre au survol du point
            />
          </Marker>
        ))}
      </Map>
    </div>
  );
};

export default Mapbox;