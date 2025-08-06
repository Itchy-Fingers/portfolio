import React from 'react';
import { Button } from '../components/ui/button';

const services = [
  {
    title: 'Web Development',
    description: 'Full-stack web development using MERN stack.',
  },
  {
    title: 'API Integration',
    description: 'Seamlessly integrate third-party APIs into your applications.',
  },
  {
    title: 'Database Management',
    description: 'Design, optimize and manage databases with MongoDB or MySQL.',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button>
          Hire Me
        </Button>
      </div>
    </div>
  );
};


export default Services;