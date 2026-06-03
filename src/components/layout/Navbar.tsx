import { Menu, Search, Tv } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import SearchInput from '../ui/SearchInput';
import MobileMenu from './MobileMenu';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          `
          fixed
          top-0
          left-0
          px-4.5
          py-2xl
          lg:px-11xl
          lg:py-8
          z-50
          w-full
          transition-all
          duration-300`,
          scrolled ? 'bg-[#0A0D1299]/40 backdrop-blur-xl' : 'bg-transparent'
        )}
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
              hidden
              md:flex
              lg:gap-8xl
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

              <Tv size={20} className="text-neutral-25 lg:size-7" fill="currentColor" />

              <Link
                to="/"
                className="
              text-xl
              font-primary
              font-bold
              tracking-tighter
              leading-3xl
              text-neutral-25
              lg:font-semibold
              lg:text-display-sm
            "
              >
                Movie
              </Link>
            </div>

            {/* Desktop */}

            <nav
              className="
                flex
                items-center
                gap-8
                lg:gap-6xl
              "
            >
              <Link to="/" className="text-neutral-25">
                Home
              </Link>

              <Link to="/favorites" className="text-white">
                Favorites
              </Link>
            </nav>
          </div>

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
