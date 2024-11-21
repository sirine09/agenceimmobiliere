// app/components/Footer.tsx
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-gray-800 text-white p-6 mt-10">
    <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
      <div>
        <h2 className="text-lg font-bold">Agence Immobilière</h2>
        <p>123 Rue de l'Immobilier, Paris, France</p>
        <p>Tél : +33 1 23 45 67 89</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Liens rapides</h3>
        <ul className="space-y-1">
          <li><Link href="/" className="hover:underline">Accueil</Link></li>
          <li><Link href="/properties" className="hover:underline">Propriétés</Link></li>
          <li><Link href="/about" className="hover:underline">À propos</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Suivez-nous</h3>
        <div className="flex space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-gray-400">
            Twitter
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gray-400">
            Instagram
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

