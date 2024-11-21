'use client'; // Assurez-vous que le composant est un Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Remplace useRouter par usePathname
import LoginModal from '../seconnecter/page';

const Header = () => {
  const pathname = usePathname(); // Utilisez usePathname pour obtenir le chemin actuel

  return (
    <header className="bg-white shadow-md sticky top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <img src="/images/logo/logo.png" alt="Logo Agence Immobilière" className="h-12" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className={`${pathname === '/' ? 'text-orange-500 underline' : 'text-gray-700'}`}>
            Accueil
          </Link>
          <Link href="/properties" className={`${pathname === '/properties' ? 'text-orange-500 underline' : 'text-gray-700'}`}>
            Propriétés
          </Link>
          <Link href="/agents" className={`${pathname === '/agents' ? 'text-orange-500 underline' : 'text-gray-700'}`}>
            Agents
          </Link>
          <Link href="/about" className={`${pathname === '/about' ? 'text-orange-500 underline' : 'text-gray-700'}`}>
            À propos
          </Link>
          <Link href="/contact" className={`${pathname === '/contact' ? 'text-orange-500 underline' : 'text-gray-700'}`}>
            Contact
          </Link>
          <LoginModal />
        </nav>
      </div>
    </header>
  );
};

export default Header;
