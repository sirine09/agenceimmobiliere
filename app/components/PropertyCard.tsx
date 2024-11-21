import Link from 'next/link';
import styles from './PropertyCard.module.css';
enum PropertyType {
  Buy = 'buy',
  Rent = 'rent',
}

type PropertyCardProps = {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
  location: string;
  rating?: number;
  type: PropertyType// Ajout de la prop type pour Buy ou Rent
};

const PropertyCard = ({ id, title, imageUrl, price, location, rating = 4, type }: PropertyCardProps) => (
  <Link href={`/properties/${id}`} passHref>
    <div className={styles.cardContainer}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.location}>{location}</p>
      <p className={styles.price}>${price}</p>
      <div className={styles.stars}>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`${styles.star} ${index < rating ? '' : styles.empty}`}
          />
        ))}
      </div>
      <button className={styles.buttonBuyOrRent}>{type === 'buy' ? 'Buy' : 'Rent'}</button>
    </div>
  </Link>
);

export default PropertyCard;




