import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const services = [
  { id: 1, title: 'Cancer Care', color: 'bg-pink-500' },
  { id: 2, title: 'Labor & Delivery', color: 'bg-slate-400' },
  { id: 3, title: 'Pediatric Care', color: 'bg-yellow-400' },
  { id: 4, title: 'Cardiology', color: 'bg-green-500' },
  { id: 5, title: 'Neurology', color: 'bg-red-500' },
  { id: 6, title: 'Orthopedics', color: 'bg-purple-500' },
];

const ServiceCard = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {services.map((service) => (
            <div key={service.id} className="relative bg-white shadow-lg rounded-xl p-6 border border-gray-200 transition-transform hover:scale-105">
              <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
              <p className="text-gray-600 mt-2">
                World-class care for everyone. Our health system offers unmatched expert health care.
              </p>
              <div className="flex items-center justify-between mt-5">
                <Link to="/doctors" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                  <BsArrowRightCircle className="text-4xl" />
                </Link>
                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${service.color} text-white font-bold text-lg`}>
                  {service.id}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;

