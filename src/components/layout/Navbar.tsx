import { Menu, Search, Tv } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import SearchInput from '../ui/SearchInput';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className="
          px-4.5
          py-2xl
          absolute
          z-50
          w-full
          border-b
          border-white/10
          bg-black/20
          backdrop-blur-md
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-full
            items-center
            justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-xs
            "
          >
            {/* Logo */}

            <Tv size={20} className="text-neutral-25" fill="currentColor" />

            <Link
              to="/"
              className="
              text-xl
              font-primary
              font-bold
              tracking-tighter
              leading-3xl
              text-neutral-25
            "
            >
              Movie
            </Link>
          </div>

          {/* Desktop */}

          <div
            className="
              hidden
              items-center
              gap-12
              md:flex
            "
          >
            <nav
              className="
                flex
                items-center
                gap-8
              "
            >
              <Link to="/" className="text-neutral-25">
                Home
              </Link>

              <Link to="/favorites" className="text-white">
                Favorites
              </Link>
            </nav>

            <div
              className="
                flex
                items-center
                gap-3
              "
            >
              <SearchInput />

              <ThemeToggle />
            </div>
          </div>

          {/* Mobile */}

          <div
            className="
              flex
              items-center
              gap-4
              md:hidden
            "
          >
            <button
              className="
              cursor-pointer
              hover:scale-110
              transition-all
              duration-300      
            "
            >
              <Search size={18} className="text-neutral-25" />
            </button>

            <ThemeToggle />

            <button
              className="
              cursor-pointer
              hover:scale-110
              transition-all
              duration-300
            "
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={24} className="text-neutral-25" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
