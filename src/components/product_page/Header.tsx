import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Offshore Developer', href: '/offshore-developer' },
  { name: 'Products', href: '/products' },
  { name: 'Our Expertise', href: '/our-expertise' },
  { name: 'Technologies', href: '/technologies' },
  { name: 'Resources', href: '/resources' },
];

const Header = () => {
  return (
    // CLASSE MISE À JOUR :
    // fixed : rend l'élément fixe par rapport à la fenêtre
    // w-full : occupe 100% de la largeur
    // top-0 : le place en haut de la page
    // z-50 : assure qu'il reste au-dessus des autres éléments
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <nav 
        // Le contenu de la nav conserve sa largeur max pour ne pas étirer les liens
        className="max-w-7xl mx-auto p-4 flex items-center justify-between"
      >
        {/* 1. Logo (Gauche) */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" style={{ height: 40 }} />
        </div>

        {/* 2. Navigation (Centre - justify-around) */}
        <div className="hidden lg:flex flex-1 justify-around items-center px-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-600 hover:text-blue-600 transition duration-150 font-medium">
                {link.name}
            </Link>
          ))}
        </div>

        {/* 3. Bouton (Droite) */}
        <div className="flex items-center">
          <button
            className="bg-app-blue hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-md"
          >
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;