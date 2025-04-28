
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#hero" className="text-xl md:text-2xl font-bold text-nova-dark font-heading">
            Nova<span className="text-nova-blue-dark">Marketing</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-nova-dark hover:text-nova-blue-dark transition-colors">About</a>
          <a href="#services" className="text-nova-dark hover:text-nova-blue-dark transition-colors">Services</a>
          <a href="#testimonials" className="text-nova-dark hover:text-nova-blue-dark transition-colors">Testimonials</a>
          <a href="#contact" className="text-nova-dark hover:text-nova-blue-dark transition-colors">Contact</a>
          <Button className="bg-nova-blue-dark hover:opacity-90 transition-opacity">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute left-0 w-full py-4 px-4">
          <div className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-nova-dark hover:text-nova-blue-dark transition-colors" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-nova-dark hover:text-nova-blue-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="text-nova-dark hover:text-nova-blue-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-nova-dark hover:text-nova-blue-dark transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-nova-blue-dark hover:opacity-90 transition-opacity w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
