import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link } from '../ui/Link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl md:text-2xl font-bold text-blue-900">
              Global<span className="text-blue-600">GPG</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className={`${scrolled ? 'text-blue-900' : 'text-white'} hover:text-blue-600`}>Home</Link>
            <Link href="#about" className={`${scrolled ? 'text-blue-900' : 'text-white'} hover:text-blue-600`}>About Us</Link>
            <Link href="#services" className={`${scrolled ? 'text-blue-900' : 'text-white'} hover:text-blue-600`}>Services</Link>
            <Link href="#case-study" className={`${scrolled ? 'text-blue-900' : 'text-white'} hover:text-blue-600`}>Case Study</Link>
            <Link href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-blue-900"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-md shadow-lg p-4 absolute left-4 right-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              <Link 
                href="#home" 
                className="text-blue-900 hover:text-blue-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#about" 
                className="text-blue-900 hover:text-blue-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="#services" 
                className="text-blue-900 hover:text-blue-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#case-study" 
                className="text-blue-900 hover:text-blue-600 py-2"
                onClick={() => setIsOpen(false)}
              >
                Case Study
              </Link>
              <Link 
                href="#contact" 
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;