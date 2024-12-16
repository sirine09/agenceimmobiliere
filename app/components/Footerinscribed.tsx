// app/components/Footer.tsx
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-gray-800 text-white p-6 mt-10">
    <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
      <div>
        <h2 className="text-lg font-bold">Agence Immobilière</h2>
        <p>123 Rue de l'Immobilier, Tunis, Tunis</p>
        <p>Tél : +216 00 000 000</p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Liens rapides</h3>
        <ul className="space-y-1">
          <li><Link href="/aboutinscribed" className="hover:underline">Accueil</Link></li>
          <li><Link href="/propertiesinscribed" className="hover:underline">Propriétés</Link></li>
          <li><Link href="/contactinscribed" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Suivez-nous</h3>
        <div className="flex space-x-4">
          <a className="hover:text-gray-400">
            Facebook
          </a>
          <a className="hover:text-gray-400">
            Twitter
          </a>
          <a className="hover:text-gray-400">
            Instagram
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

