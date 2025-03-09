import React, { useState } from 'react';
import { BASE_URL } from '../../config';
import Doctor_card from './../../components/Doctors/Doctor_card';
import UseFetchData from '../../Hooks/UseFetchData';
 
const Doctors = () => {
  const { data, loading, error } = UseFetchData(`${BASE_URL}/api/v1/doctors/`);
  const [searchQuery, setSearchQuery] = useState('');

  if (loading) return <div className='text-center text-gray-700 font-semibold mt-20 animate-pulse'>Loading...</div>;
  if (error) return <div className='text-center text-red-500 font-semibold mt-20'>Error: {error}</div>;

  const filteredDoctors = data.data.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='doctor_container mt-3 flex justify-center bg-gradient-to-b from-blue-50 to-white min-h-screen pt-10 w-full'>
      <div className='max-w-[1100px] w-full px-6'>
        {/* Page Title */}
        <div className='text-center flex flex-col items-center'>
          <h2 className='md:text-4xl text-2xl font-bold text-gray-800 mb-6 animate-fade-in'>Find a Doctor</h2>
          
          {/* Search Bar */}
          <div className='max-w-[570px] w-full flex items-center bg-white shadow-lg rounded-xl px-2 md:px-4 py-2 border border-gray-300 transition-all hover:shadow-xl'>
            <input
              type='search'
              placeholder='Search for a doctor...'
              className='flex-1 bg-transparent outline-none text-gray-700 text-lg'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className='bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-3 py-2 md:px-6 md:py-2 font-semibold transition-all duration-300 shadow-md'>
              Search
            </button>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 animate-fade-in'>
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <Doctor_card key={doctor.id} doctor={doctor} />
            ))
          ) : (
            <p className='text-center text-gray-500 text-lg col-span-full'>No doctors found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
