'use client';
import Link from 'next/link';
import { useFavorites } from '../context/FavoritesContext';

enum PropertyType {
  Buy = 'buy',
  Rent = 'rent',
}

type PropertyCardProps = {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  location: string;
  rating?: number; // La notation par défaut est gérée dans le composant.
  type: PropertyType; // Achat ou location.
  onAddToFavorites: (id: number) => void; // Fonction pour ajouter aux favoris.
  isFavorite: boolean; // Indique si la propriété est déjà dans les favoris.
};

const PropertyCardinscribed = ({ id, title, imageUrl, price, location, rating = 4, type }: PropertyCardProps) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.transform = 'translateY(-5px)';
    target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    target.style.transform = '';
    target.style.boxShadow = '';
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Bouton cœur pour favoris */}
      <button
        onClick={() => (isFavorite(id) ? removeFromFavorites(id) : addToFavorites(id))}
        style={{
          color: isFavorite(id) ? 'red' : 'black',
        }}
      >
        {isFavorite(id) ? '❤️' : '🤍'}
      </button>
      <Link href={`/propertiesinscribed/${id}`} passHref>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {/* Image */}
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
            }}
          />

          {/* Contenu principal */}
          <div style={{ padding: '16px' }}>
            <h2
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#f27405',
                marginBottom: '8px',
              }}
            >
              {title}
            </h2>
            <p style={{ fontSize: '14px', color: '#a1a1a1', marginBottom: '4px' }}>
              {location}
            </p>
            <p
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#d35400',
                marginBottom: '12px',
              }}
            >
              ${price}
            </p>

            {/* Étoiles */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '12px' }}>
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  style={{
                    fontSize: '16px',
                    color: index < rating ? '#f5a623' : '#e0e0e0',
                  }}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Bouton Acheter ou Louer */}
            <button
              style={{
                padding: '8px 16px',
                border: 'none',
                borderRadius: '4px',
                backgroundColor: '#f97316',
                color: 'white',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#d35400';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#d35400';
              }}
            >
              {type === PropertyType.Buy ? 'Acheter' : 'Louer'}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCardinscribed;



