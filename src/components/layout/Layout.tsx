import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ScrollTopButton from './ScrollTopButton';
import WhatsAppButton from './WhatsAppButton';
import Footer from './Footer';
import logo from '../../assets/logo.png';

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-lightGray">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 relative z-10">
            <img src={logo} alt="Karnali Construction" className="h-14 md:h-18 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 text-neutral-darkGray">
            <Link className="hover:text-primary transition-colors" to="/">Home</Link>
            <Link className="hover:text-primary transition-colors" to="/about">About</Link>
            <Link className="hover:text-primary transition-colors" to="/services">Services</Link>
            <Link className="hover:text-primary transition-colors" to="/projects">Projects</Link>
            <Link className="hover:text-primary transition-colors" to="/contact">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-neutral-darkGray hover:text-primary transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-lightGray">
            <nav className="px-4 py-4 space-y-3">
              <Link 
                className="block py-2 text-neutral-darkGray hover:text-primary transition-colors font-medium" 
                to="/"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                className="block py-2 text-neutral-darkGray hover:text-primary transition-colors font-medium" 
                to="/about"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                className="block py-2 text-neutral-darkGray hover:text-primary transition-colors font-medium" 
                to="/services"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link 
                className="block py-2 text-neutral-darkGray hover:text-primary transition-colors font-medium" 
                to="/projects"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
              <Link 
                className="block py-2 text-neutral-darkGray hover:text-primary transition-colors font-medium" 
                to="/contact"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollTopButton />
      <WhatsAppButton />
    </div>
  );
}

