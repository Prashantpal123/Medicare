import React, { useEffect, useRef, useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom'; 
import { BiMenu, BiX } from "react-icons/bi";
import logo from '../../assets/logo.png';
import { authContext } from '../../context/Authcontext.jsx';

const navLinks = [
  { path: '/home', display: 'Home' },
  { path: '/Doctors', display: 'Find a Doctor' },
  { path: '/service', display: 'Services' },
  { path: '/contact', display: 'Contact' },
];

const Header = () => {
  const headerRef = useRef(null);
  const { user, role, token } = useContext(authContext);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleStickyHeader = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    };
    window.addEventListener('scroll', handleStickyHeader);
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header ref={headerRef} className='fixed top-0 left-0 w-full bg-[#0d1f3b] shadow-lg z-50 transition-all duration-300 overflow-hidden'>
      <div className='container mx-auto px-1 py- flex justify-between items-center'>
        {/* Logo */}
        <Link to='/home'>
          <img src={logo} alt='logo' className='md:h-12 filter invert brightness- hover:scale-105 transition-transform duration-300 max-w-full' />
        </Link>

        {/* Navigation */}
        <nav className='hidden md:flex gap-10 lg:gap-20'>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `text-white font-semibold transition transform hover:scale-110 hover:text-yellow-300 ${isActive ? 'border-b-2 border-yellow-300' : ''}`
              }
            >
              {link.display}
            </NavLink>
          ))}
        </nav>

        {/* User Profile / Login */}
        <div className='flex items-center md:gap-6'>
          {token && user ? (
            <Link to={role === "doctor" ? "/doctors/profile/me" : "/users/profile/me"}>
              <img
                src={user.photo}
                alt='User Profile'
                className='w-10 h-10 rounded-full border-2 border-yellow-400  object-cover shadow-lg hover:scale-110 transition-transform duration-300 max-w-full'
              />
            </Link>
          ) : (
            <Link to='/login' className='py-2'>
              <button className='bg-yellow-400 text-gray-900 px-4 py-1 md:px-6 md:py-2 rounded-full font-semibold hover:bg-yellow-500 transition shadow-md hover:scale-105 duration-300'>
                Login
              </button>
            </Link>
          )}
          
          {/* Mobile Menu Button */}
          <button className='md:hidden' onClick={toggleSidebar}>
            <BiMenu className='w-10 h-10 text-white hover:scale-110 transition-transform duration-300' />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full bg-blue-800 shadow-2xl w-80 p-6 transform ${isSidebarOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-all duration-500 ease-in-out z-50 overflow-y-auto`}> 
        <button onClick={toggleSidebar} className='absolute top-4 right-4'>
          <BiX className='w-10 h-10 text-gray-300 hover:text-red-600 transition-transform hover:rotate-90 duration-300' />
        </button>
        <nav className='mt-16 flex flex-col gap-8 text-lg'>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className='text-gray-300 font-semibold transition hover:text-yellow-400 hover:translate-x-2 duration-300'
              onClick={toggleSidebar}
            >
              {link.display}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
