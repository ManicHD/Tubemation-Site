import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import automationIcon from '/automation-icon.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isGetStartedPage = location.pathname === '/get-started';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={automationIcon} alt="Tubemation Logo" className="w-10 h-10" />
          </div>
          <span className={`font-bold text-xl transition-colors ${isScrolled ? 'text-navy-900' : isGetStartedPage ? 'text-white drop-shadow-lg' : 'text-navy-800'}`}>Tubemation</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`font-medium transition-colors ${isScrolled ? 'text-navy-800 hover:text-red-600' : isGetStartedPage ? 'text-white drop-shadow-lg hover:text-red-400' : 'text-navy-600 hover:text-red-600'}`}>Home</Link>
          <a href="#featured-content" className={`font-medium transition-colors ${isScrolled ? 'text-navy-800 hover:text-red-600' : isGetStartedPage ? 'text-white drop-shadow-lg hover:text-red-400' : 'text-navy-600 hover:text-red-600'}`}>Content</a>
          <a href="#about-us" className={`font-medium transition-colors ${isScrolled ? 'text-navy-800 hover:text-red-600' : isGetStartedPage ? 'text-white drop-shadow-lg hover:text-red-400' : 'text-navy-600 hover:text-red-600'}`}>About Us</a>
          <Link to="/get-started" className="btn btn-primary">Get Started</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden transition-colors ${isScrolled ? 'text-navy-900' : isGetStartedPage ? 'text-white drop-shadow-lg' : 'text-navy-800'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-navy-800 hover:text-red-600 font-medium transition-colors py-2">Home</Link>
            <a href="#featured-content" className="text-navy-800 hover:text-red-600 font-medium transition-colors py-2">Content</a>
            <a href="#about-us" className="text-navy-800 hover:text-red-600 font-medium transition-colors py-2">About Us</a>
            <Link to="/get-started" className="btn btn-primary w-full text-center">Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;