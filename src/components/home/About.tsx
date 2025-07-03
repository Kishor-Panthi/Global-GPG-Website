import React from 'react';
import { Globe, Users, Award, BarChart } from 'lucide-react';
import kishorImage from '../../assets/Kishor.jpg'
import sandeshImage from '../../assets/Sandesh.jpg'
import kshitijImage from '../../assets/Kshitij.jpg'
import bipulImage from '../../assets/Bipul.jpg'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">About Global GPG</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our global mission is to bridge the digital divide by providing affordable technology solutions to emerging markets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Global Mission</h3>
            <p className="text-gray-700 mb-6">
              At Global GPG, we're committed to sustainable development, digital inclusion, and job creation across international markets. By leveraging offshore expertise, we deliver affordable innovation to businesses that need it most.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                <Globe className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="font-bold text-blue-900 mb-2">Global Reach</h4>
                <p className="text-gray-700">Operations spanning North America and Asia</p>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                <Users className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="font-bold text-blue-900 mb-2">Diverse Expertise</h4>
                <p className="text-gray-700">Multicultural team with varied technical skills</p>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                <Award className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="font-bold text-blue-900 mb-2">Quality Focus</h4>
                <p className="text-gray-700">Enterprise-grade solutions at SMB prices</p>
              </div>
              
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                <BarChart className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="font-bold text-blue-900 mb-2">Measurable Impact</h4>
                <p className="text-gray-700">Data-driven approach to digital transformation</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our diverse team working together" 
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-blue-800 text-center mb-10">Our Global Leadership Team</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Kishor Panthi",
                title: "CEO & Founder",
                location: "North Carolina, USA",
                image: kishorImage
              },
              {
                name: "Bipul Panthi",
                title: "Head of APAC Operations",
                location: "Tokyo, Japan",
                image: bipulImage
              },
              {
                name: "Sandesh Gautam",
                title: "CTO",
                location: "Kathmandu, Nepal",
                image: sandeshImage
              },
              {
                name: "Kshitij Ghawali",
                title: "Director of Client Success",
                location: "Toronto, Canada",
                image: kshitijImage
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-blue-900">{member.name}</h4>
                  <p className="text-blue-600">{member.title}</p>
                  <p className="text-gray-500 text-sm mt-1">{member.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;