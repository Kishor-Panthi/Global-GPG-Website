import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const CaseStudy: React.FC = () => {
  return (
    <section id="case-study" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Success Story</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how we've helped transform businesses through affordable digital solutions.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="order-2 lg:order-1 p-8 lg:p-12">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                Case Study: Logistics
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                KenLogistics: Modernizing Operations in Kenya
              </h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">The Challenge</h4>
                <p className="text-gray-700 mb-4">
                  KenLogistics, a mid-sized logistics company in Nairobi, was struggling with outdated manual processes and disconnected systems, resulting in shipment delays and customer dissatisfaction.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-2 flex-shrink-0">✕</span>
                    <span className="text-gray-700">Paper-based tracking of shipments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-2 flex-shrink-0">✕</span>
                    <span className="text-gray-700">No real-time visibility for customers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-2 flex-shrink-0">✕</span>
                    <span className="text-gray-700">Limited data for business decisions</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">Our Solution</h4>
                <p className="text-gray-700 mb-4">
                  We developed a cost-effective digital platform tailored to their needs and budget constraints:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">Cloud-based shipment tracking system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">Mobile app for drivers and customers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="h-6 w-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">Data analytics dashboard for management</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-blue-800 mb-3">The Results</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <span className="block text-3xl font-bold text-blue-600">68%</span>
                    <span className="text-sm text-gray-600">Reduction in delivery errors</span>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <span className="block text-3xl font-bold text-blue-600">42%</span>
                    <span className="text-sm text-gray-600">Increase in customer satisfaction</span>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <span className="block text-3xl font-bold text-blue-600">3.5x</span>
                    <span className="text-sm text-gray-600">Return on investment</span>
                  </div>
                </div>
                <Button className="flex items-center">
                  Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 h-64 lg:h-auto">
              <img 
                src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="KenLogistics team using the new digital system" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Want to see more examples of our work?
          </p>
          <Button variant="secondary">
            View More Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;