import React from 'react';
import Service_card from '../components/Services/Service_card';

const Services = () => {
  return (
    <div className='bg-gradient-to-b mt-3 from-blue-50 to-white py-12 min-h-screen flex flex-col items-center'>
      
      {/* Title Section */}
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4 animate-fade-in'>
          Our Medical Services
        </h1>
        <p className='text-lg text-gray-600 max-w-lg mx-auto leading-relaxed animate-fade-in'>
          World-class care for everyone. Our health system offers unmatched, expert healthcare with cutting-edge technology.
        </p>
      </div>

      {/* Services List */}
      <div className='mt-10 w-full flex justify-center animate-fade-in'>
        <div className='max-w-[1100px] w-full px-6'>
          <Service_card />
        </div>
      </div>
    </div>
  );
};

export default Services;

