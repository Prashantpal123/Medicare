import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { BsLinkedin } from 'react-icons/bs';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai';

const socialLinks = [
  { path: "#", icon: <AiFillYoutube className='text-[32px] hover:text-red-500 transition-all duration-300' /> },
  { path: "#", icon: <AiFillGithub className='text-[32px] hover:text-gray-400 transition-all duration-300' /> },
  { path: "#", icon: <AiOutlineInstagram className='text-[32px] hover:text-pink-400 transition-all duration-300' /> },
  { path: "#", icon: <BsLinkedin className='text-[32px] hover:text-blue-500 transition-all duration-300' /> },
];

const quickLinks = [
  { title: "Quick Links", links: [
    { path: "/home", display: "Home" },
    { path: "/about", display: "About Us" },
    { path: "/services", display: "Services" },
    { path: "/blog", display: "Blog" },
  ]},
  { title: "Find a Doctor", links: [
    { path: "/find-a-doctor", display: "Find a Doctor" },
    { path: "/appointment", display: "Request an Appointment" },
    { path: "/locations", display: "Find a Location" },
    { path: "/opinion", display: "Get an Opinion" },
  ]},
  { title: "Support", links: [
    { path: "/donate", display: "Donate" },
    { path: "/contact", display: "Contact Us" },
  ]},
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-gray-900 text-white flex justify-center w-full'>
      <div className='container mx-4 lg:ml-32 mt-4 mb-4 lg:px-8 grid  grid-cols-2 gap-x-16 gap-y-4 sm:grid-cols-3 md:grid-cols-4  md:gap-8 md:text-left'>
        <div>
          <img src={logo} alt="Logo" className='w-40 mx-auto md:mx-0' />
          <p className='text-gray-400 mt-4 text-sm'>
            &copy; {year} Developed by PRASHANT PAL. All rights reserved.
          </p>
          <div className='flex justify-center md:justify-start gap-1 mt-4'>
            {socialLinks.map((item, index) => (
              <Link key={index} to={item.path} className='p- bg-gray-800 rounded-full hover:bg-gray-700'>
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        {quickLinks.map((section, index) => (
          <div key={index}>
            <h2 className='text-lg font-semibold mt-3  text-gray-300'>{section.title}</h2>
            <ul className=''>
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className='text-gray-400 hover:text-gray-100 transition-all'>
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
