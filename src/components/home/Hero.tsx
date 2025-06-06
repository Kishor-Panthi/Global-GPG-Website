import React from 'react';
import { Button } from '../ui/Button';
import { Link } from '../ui/Link';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOEgwdjM2aDM2VjE4eiIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIwLjA0Ii8+PC9nPjwvc3ZnPg==')] opacity-10 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fadeInUp">
              Affordable Innovation <br className="hidden md:block" />
              <span className="text-blue-300">For Emerging Markets</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fadeInUp animation-delay-200">
              Global GPG provides low-cost digital modernization services to small and mid-sized businesses in Africa and low-tier U.S. markets.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp animation-delay-400">
              <Link href="#services">
                <Button size="lg" variant="primary" className="w-full sm:w-auto">
                  Explore Our Services
                </Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:bg-opacity-10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-blue-300 rounded-lg blur opacity-75 animate-pulse"></div>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Global tech team collaborating" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium text-xl">Trusted by businesses across continents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-blue-700 border-opacity-40">
          <p className="text-blue-200 text-center mb-6">Trusted by companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-75">
            <div className="bg-white bg-opacity-10 px-6 py-3 rounded-lg">
              <p className="text-white font-bold">ACME Corp</p>
            </div>
            <div className="bg-white bg-opacity-10 px-6 py-3 rounded-lg">
              <p className="text-white font-bold">TechStart</p>
            </div>
            <div className="bg-white bg-opacity-10 px-6 py-3 rounded-lg">
              <p className="text-white font-bold">Innovate Ltd</p>
            </div>
            <div className="bg-white bg-opacity-10 px-6 py-3 rounded-lg">
              <p className="text-white font-bold">GrowthHub</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;