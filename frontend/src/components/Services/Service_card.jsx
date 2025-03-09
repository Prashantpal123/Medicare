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
    <section className="md:py-12 py-3 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-2 md:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-16">
          {services.map((service) => (
            <div key={service.id} className="relative bg-white shadow-lg rounded-xl p-2 md:p-6 border border-gray-200 transition-transform hover:scale-105">
              <h2 className="text-xl font-bold text-gray-800">{service.title}</h2>
              <p className="text-gray-600 text-[13px] mt-2">
                World-class care for everyone. Our health system offers unmatched expert health care.
              </p>
              <div className="flex items-center justify-between mt-2 md:mt-5">
                <Link to="/doctors" className="flex items-center text-gray-700 hover:text-blue-600 transition">
                  <BsArrowRightCircle className="md:text-4xl text-3xl" />
                </Link>
                <div className={`md:w-10  md:h-10 w-7 h-7 flex items-center justify-center rounded-full ${service.color} text-white font-bold text-lg`}>
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

