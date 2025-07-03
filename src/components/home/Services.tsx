import React from 'react';
import { 
  LayoutGrid, 
  Cloud, 
  Code, 
  LineChart, 
  Users, 
  Shield, 
  Database, 
  Smartphone 
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600 transition-all hover:shadow-xl">
      <div className="text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <LayoutGrid className="h-10 w-10" />,
      title: "Digital Transformation",
      description: "Comprehensive strategies to modernize your business operations and customer experiences."
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: "Cloud Migration",
      description: "Seamless transition to cloud platforms with minimal disruption to your business."
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Software Development",
      description: "Custom software solutions tailored to your specific business needs and budget."
    },
    {
      icon: <LineChart className="h-10 w-10" />,
      title: "IT Strategy",
      description: "Long-term technology roadmaps aligned with your business goals and market conditions."
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "AI Chatbot Integration",
      description: "Let Customers communicate with a local AI chatbot"
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Cybersecurity",
      description: "Protect your business with affordable yet comprehensive security solutions."
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights to drive business decisions."
    },
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile Solutions",
      description: "Responsive web and native mobile applications for your customers and team."
    }
  ];

  return (
    <section id="services" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide a comprehensive range of technology services, tailored to meet the unique needs of emerging markets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-700 to-blue-900 rounded-xl p-8 md:p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Affordable Solutions for Real Business Challenges
              </h3>
              <p className="text-blue-100 mb-6">
                Our services are specifically designed to deliver maximum value within the budgetary constraints of small and medium-sized businesses in emerging markets.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2 flex-shrink-0">✓</span>
                  <span>50-70% cost savings compared to traditional consulting firms</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2 flex-shrink-0">✓</span>
                  <span>Flexible engagement models adapted to your budget</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2 flex-shrink-0">✓</span>
                  <span>Local context with global expertise</span>
                </li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg">
              <blockquote className="text-white italic">
                "Global GPG helped us modernize our systems at a fraction of what other consultants quoted. Their team understood our local challenges while bringing global best practices."
                <footer className="mt-4 text-blue-200 font-medium">
                  — David Mwangi, CEO of KenLogistics
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;