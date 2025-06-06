import React from 'react';
import { Globe, Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Link } from '../ui/Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-blue-400 mr-2" />
              <span className="text-xl font-bold">
                Global<span className="text-blue-400">GPG</span>
              </span>
            </div>
            <p className="text-blue-200 mb-4">
              Providing low-cost digital modernization services to small and mid-sized businesses in Africa and low-tier U.S. markets.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-blue-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-blue-200 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="#case-study" className="text-blue-200 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Digital Transformation</Link></li>
              <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Cloud Migration</Link></li>
              <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Software Development</Link></li>
              <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">IT Strategy</Link></li>
              <li><Link href="#" className="text-blue-200 hover:text-white transition-colors">Remote Team Augmentation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span>Offices in North Carolina, Japan, Nepal, and Toronto</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <span>info@globalgpg.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Global GPG Consulting Group. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-blue-200 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;