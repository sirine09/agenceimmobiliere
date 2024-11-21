// 'use client'
// import styles from './AboutContent.module.css';

// const AboutSection = () => {
//   // Fonction pour rediriger vers la page agents
//   const handleRedirect = () => {
//     window.location.href = '/agents'; // Redirection vers la page des agents
//   };

//   return (
//     <div className={styles.container}>
//       {/* Text section */}
//       <div className={styles.textContainer}>
//         <h2 className={styles.title}>À propos de notre agence</h2>
//         <div className={styles.titleUnderline}></div>
//         <p className={styles.text}>
//           Notre agence immobilière est spécialisée dans la vente et la location de biens immobiliers de luxe.
//           Depuis plus de 20 ans, nous accompagnons nos clients dans la recherche de leur maison de rêve.
//         </p>
//         <p className={styles.text}>
//           Nous mettons à votre disposition une équipe de professionnels expérimentés pour vous guider tout au long du processus, de la recherche jusqu'à la signature.
//         </p>

//         {/* Bouton "Notre Groupe" */}
//         <button onClick={handleRedirect} className={styles.groupButton}>
//           Notre Groupe
//         </button>
//       </div>

//       {/* Image grid */}
//       <div className={styles.imageGrid}>
//         <img src="images/properties/apropos1.jfif" alt="Property 1" className={styles.image} />
//         <img src="images/properties/apropos2.jpg" alt="Property 2" className={styles.image} />
//         <img src="images/properties/apropos3.jpg" alt="Property 3" className={styles.image} />
//         <img src="images/properties/apropos4.jpg" alt="Property 4" className={styles.image} />
//       </div>
//     </div>
//   );
// };

// export default AboutSection;
'use client';
import styles from './AboutContent.module.css';

const AboutSection = () => {
  // Fonction pour rediriger vers la page des agents
  const handleRedirect = () => {
    window.location.href = '/agents'; // Redirection vers la page des agents
  };

  return (
    <div>
      {/* Section À propos */}
      <section className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>À propos de nous</h2>
          <div className={styles.titleUnderline}></div>
          <p className={styles.text}>
            Notre entreprise se spécialise dans la fourniture de services de qualité dans le domaine du médical. Nous avons une équipe de professionnels qualifiés prêts à offrir le meilleur service à nos clients.
          </p>
          {/* Bouton avec gestion de redirection */}
          <button className={styles.groupButton} onClick={handleRedirect}>
            Notre Groupe
          </button>
        </div>

        {/* Grille des images */}
        <div className={styles.imageGrid}>
        <img src="images/properties/apropos1.jfif" alt="Property 1" className={styles.image} />
        <img src="images/properties/apropos2.jpg" alt="Property 2" className={styles.image} />
        <img src="images/properties/apropos3.jpg" alt="Property 3" className={styles.image} />
        <img src="images/properties/apropos4.jpg" alt="Property 4" className={styles.image} />
      </div>
      </section>

      {/* Section Avis clients */}
      <section className={styles.reviewsSection}>
        <h2 className={styles.reviewsTitle}>Avis de nos clients</h2>
        <div className={styles.reviewsContainer}>
          {/* Avis client 1 */}
          <div className={styles.reviewCard}>
            <p className={styles.reviewText}>
              "Excellent service, vraiment impressionné par la qualité de l'assistance médicale."
            </p>
            <p className={styles.clientName}>Marie Dupont</p>
          </div>
          {/* Avis client 2 */}
          <div className={styles.reviewCard}>
            <p className={styles.reviewText}>
              "Le personnel est très professionnel et m'a bien guidé tout au long de mon traitement."
            </p>
            <p className={styles.clientName}>Jean Martin</p>
          </div>
          {/* Avis client 3 */}
          <div className={styles.reviewCard}>
            <p className={styles.reviewText}>
              "Très satisfait de l'accueil et des services offerts. Je recommande vivement."
            </p>
            <p className={styles.clientName}>Sophie Leroy</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
