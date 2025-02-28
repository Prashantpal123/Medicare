import React, { useContext, useState } from "react";
import Main_dash from "./Main-dash";
import Appointments from "./Appointments";
import MainDash from "./Main-dash";
import { authContext } from "../../context/Authcontext";

const Dashboard = () => {
   const {dispatch}= useContext(authContext)
    const [activePage, setActivePage] = useState("Appointments");
    const handleLogout=()=>{
      dispatch({type:"LOGOUT"})
    }
  return (
    <div className="md:flex  bg-gray-100">
      {/* Sidebar */}
      <div className=" flex md:flex-col md:w-1/5 w-full  bg-white shadow-md md:p-5">
        <h2 className="text-xl hidden md:block font-bold text-blue-600">Prescripto</h2>
        <button className="mt-3 hidden md:block bg-gray-200 text-xs md:px-3 py-1 rounded-full">Doctor</button>
        <nav className="md:mt-5 w-full   mt-2 mx-2">
          <ul className="flex justify-between md:flex-col">
            <li
              className={`py-2 md:text-[17px] text-[13px] font-medium cursor-pointer ${activePage === "Dashboard" ? "text-blue-600" : "text-gray-700"}`}
              onClick={() => setActivePage("Dashboard")}
            >📊 Dashboard</li>
            <li
              className={`py-2  md:text-[17px] text-[13px] font-medium cursor-pointer ${activePage === "Appointments" ? "text-blue-600" : "text-gray-700"}`}
              onClick={() => setActivePage("Appointments")}
            >📅 Appointments</li>
            <li
              className={`py-2  md:text-[17px] text-[13px] font-medium cursor-pointer ${activePage === "Profile" ? "text-blue-600" : "text-gray-700"}`}
              onClick={() => setActivePage("Profile")}
            >👤 Profile</li>
          </ul>
        </nav>
      </div>
      

      {/* Main Content */}
      <div className=" md:px-6 md:w-4/5 mt-2 mx-1 ">
        {/* Header */}
        <div className="flex  justify-between items-center mb-2">
          <h2 className=" md:text-xl font-[700]">{activePage}</h2>
          <button onClick={handleLogout} className="bg-blue-600  text-white px-2 py-1 md:px-4 md:py-2 rounded">Logout</button>
        </div>

        {/* Dynamic Content */}
        <div className="bg-white shadow-md  rounded-lg md:p-4">
          {activePage === "Appointments" && (
           <Appointments />
          )}

          {activePage === "Dashboard" && (
            <div>  <MainDash/> </div>
           
 
          )}

          {activePage === "Profile" && (
            <p className="text-gray-700">This is your profile page. You can update your details here.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
