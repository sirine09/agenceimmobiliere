// app/components/ContactBanner.tsx
import Link from 'next/link';
import styles from './ContactBanner.module.css';

const ContactBanner = () => (
  <section className={styles.banner}>
    <h2 className={styles.title}>Prêt à trouver votre future maison ?</h2>
    <p className={styles.text}>Contactez-nous dès aujourd'hui pour une consultation gratuite.</p>
    <Link href="/contact" className={styles.button}>
      Contactez-nous
    </Link>
  </section>
);

export default ContactBanner;


