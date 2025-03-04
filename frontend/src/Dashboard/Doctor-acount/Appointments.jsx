import React from 'react';
import useFetchData from '../../Hooks/usefetchData';
import { BASE_URL } from '../../config';


const Appointments = () => {



  const { data, loading, error,  } =  useFetchData(`${BASE_URL}/api/v1/bookings/approved`);
   
    
  if (loading) return <div>Loading...</div>; // Show loading message while fetching
  if (error) return <div>Error: {error}</div>;
 console.log(data)
 let bookings=data;
  return (
    <div className="p-4 md:p-6 bg-white shadow-lg rounded-xl borde  mx-3">
      <h2 className="text-xl font-bold text-center text-gray-800 mb-4">MY Appointments</h2>
      <div className="block  lg:hidden">
        {bookings.map((a) => (
          <div key={a} className="bg-gray-100 p-4 mb-3 mx-3 rounded-lg shadow-md">
            <div className="flex items-center mb-2">
              <img src={a.photo} alt="profile" className="rounded-full mr-3 border w-10 h-10" />
              <div>
                <p className="text-gray-700 font-bold">{a.name}</p>
                <p className="text-gray-500 text-sm">{a.date}</p>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <p><strong>Payment:</strong> {a.isPaid ? "Done" : "Pending"}</p>
              <p><strong>Age:</strong> {a.age}</p>
            </div>
            <div className="flex justify-between text-sm text-gray-700 mt-2">
              <p><strong>Fees:</strong> {a.ticketPrice}</p>
              <div className="flex space-x-2">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-2 rounded-xl shadow-md transition duration-300 text-sm">
                  
                </button>
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-3 py-2 rounded-xl shadow-md transition duration-300 text-sm">
              Done
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden lg:block">
        <table className="w-full text-left mx-3 bg-white rounded-lg shadow ">
          <thead>
            <tr className="bg-blue-500 text-white text-sm">
              <th className="p-2 md:p-3 w-10">#</th>
              <th className="p-2 md:p-3 w-40">Patient</th>
              <th className="p-2 md:p-3 w-24">Payment</th>
              <th className="p-2 md:p-3 w-16">Age</th>
              <th className="p-2 md:p-3 w-48">Date & Time</th>
              <th className="p-2 md:p-3 w-20">Fees</th>
              <th className="p-2 md:p-3 w-40 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((a, i) => (
              <tr key={a._id} className={`border-b ${i % 2 ? 'bg-gray-50' : 'bg-white'}`}>
                <td className="p-2 md:p-3 text-gray-700 text-sm">{a.id}</td>
                <td className="p-2 md:p-3 text-gray-700 flex items-center text-sm">
                  <img src={a.photo} alt="profile" className="rounded-full mr-2 border w-8 h-8" />
                  {a.name}
                </td>
                <td className="p-2 md:p-3 text-sm"><span className="bg-gray-200 px-2 py-1 rounded text-blue-700 font-bold">{a.isPaid ? "Done" : "Pending"}</span></td>
                <td className="p-2 md:p-3 text-gray-700 text-sm">{a.age}</td>
                <td className="p-2 md:p-3 text-gray-700 text-sm whitespace-nowrap">{a.date}  {a.time}</td>
                <td className="p-2 md:p-3 text-gray-700 font-bold text-sm">{a.ticketPrice}</td>
                <td className="p-2 md:p-3 text-center flex justify-center space-x-2 md:space-x-3">
                  <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-md transition duration-300 text-sm">
                    Decline
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white font-bold px-3 py-1 md:px-4 md:py-2 rounded-lg shadow-md transition duration-300 text-sm">
                 Done
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
