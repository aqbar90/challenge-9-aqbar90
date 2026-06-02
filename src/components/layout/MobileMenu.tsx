import { Tv, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="
            px-4.5
            py-4.25
            fixed
            inset-0
            z-50
            bg-black
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
            <div>
              <button
                className="
                cursor-pointer
              "
                onClick={onClose}
              >
                <X size={24} className="text-neutral-25" />
              </button>
            </div>
          </div>
          <nav
            className="
              mt-8
              flex
              flex-col
              gap-3xl
              px-1.5
            "
          >
            <Link
              to="/"
              onClick={onClose}
              className="
            text-neutral-25
            text-md
            font-regular
            leading-md"
            >
              Home
            </Link>

            <Link
              to="/favorites"
              onClick={onClose}
              className="
            text-neutral-25
            text-md
            font-regular
            leading-md"
            >
              Favorites
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
