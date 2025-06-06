import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  country: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Mwangi",
    role: "CEO",
    company: "KenLogistics",
    country: "Kenya",
    content: "Global GPG understood our local challenges while bringing global best practices. They helped us modernize our systems at a fraction of what other consultants quoted.",
    rating: 5
  },
  {
    id: 2,
    name: "Lisa Johnson",
    role: "Operations Manager",
    company: "Carolina Manufacturing",
    country: "USA",
    content: "As a small manufacturer in a rural area, we struggled to find affordable tech expertise. Global GPG delivered enterprise-quality solutions within our tight budget constraints.",
    rating: 5
  },
  {
    id: 3,
    name: "Emmanuel Osei",
    role: "Founder",
    company: "GhanaGrow Farms",
    country: "Ghana",
    content: "The mobile app developed by Global GPG has revolutionized how we track and distribute our agricultural products. Their team truly understood our unique market challenges.",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 8000);
      
      return () => clearInterval(interval);
    }
  }, [isPaused]);
  
  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    setIsPaused(true);
  };
  
  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
    setIsPaused(true);
  };
  
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Trusted by businesses across continents to deliver affordable innovation.
          </p>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-blue-800 rounded-xl p-8 md:p-10 shadow-xl">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'}`}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl italic mb-6">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-lg">{testimonial.name}</p>
                        <p className="text-blue-300">
                          {testimonial.role}, {testimonial.company}
                        </p>
                        <p className="text-blue-400 text-sm">
                          {testimonial.country}
                        </p>
                      </div>
                      <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center font-bold text-2xl">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-blue-600 hover:bg-blue-700 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 md:-translate-x-6"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-blue-600 hover:bg-blue-700 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 md:translate-x-6"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPaused(true);
                }}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-white w-6' : 'bg-blue-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;