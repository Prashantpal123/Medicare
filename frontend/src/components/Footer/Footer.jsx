import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"
import { BsLinkedin } from 'react-icons/bs'
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from 'react-icons/ai'


const socialLinks = [
  {
    path: "ho;afoaj;",
   icon : <AiFillYoutube className='group-hover:text-white text-[50px] mt-3 hover:text-[60px]  hover:border-black hover:text-red-600' />,
  
  },
  {
    path: "ho;afoaj;",
    icon: <AiFillGithub className='group-hover:text-white text-[50px]  hover:text-[60px]  mt-3' />,
  },
  {
    path: "ho;afoaj;",
    icon: <AiOutlineInstagram className='group-hover:text-white  text-[50px]  mt-3 hover:text-white hover:text-[55px] hover:bg-rose-600 hover:border hover:rounded-full' />,
  },
  {
    path: "ho;afoaj;",
    icon: <BsLinkedin className='group-hover:text-white text-[36px] mt-5 hover:text-sky-900 hover:text-[45px] hover:border  ' />,
  },

];

const quicklinks01 = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/",
    display: "About Us"
  }, {
    path: "/Services",
    display: "Home"
  }, {
    path: "/",
    display: "Blog"
  }
];

const quicklinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor"
  },
  {
    path: "/",
    display: "Request an Appointment"
  },
  {
    path: "/",
    display: "Find a Location"
  },
  {
    path: "/",
    display: "Get a Opinion"
  }
];
const quicklinks03 = [
  {
    path: "/",
    display: "Donate"
  },
  {
    path: "/",
    display: "Contact Us"
  },

];
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className='footer_container mx-3 flex justify-center  mt-16 mb-8  '>
        <div className='flex max-w-[1100px] justify-between flex-col md:flex-row flex-wrap gap-[30px] md:gap-[50px]'>
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 font-[400] text-gray-400 mt-4'>
              Copyright {year} devloped by PRASHANT PAL all right reserved.
            </p>


            <div className='flex items-center gap-3'>
              {socialLinks.map((item, index) => (
              
                  <Link
                    to={item.path}
                    className='flex w- h-12  
                    item center justify-center
                     '> <div className='h'>{item.icon}</div></Link>
                

              ))}
          </div>

            


          </div>
          <div>

            <h2 className='text-[15px] lg:text-[20px] leading-[30px] font-[700] 
             text-slate-900 '>Quick Links</h2>
            <ul>
              {quicklinks01.map((item, index) => (
                <li key={index} className=''>
                  <Link
                    to={item.path}
                    className='text-[16px]   hover:text-sky-600 font-[400] text-gray-600'>{item.display}</Link>
                </li>

              ))}
            </ul>
          </div>


          <div>

            <h2 className='text-[15px] lg:text-[20px]  font-[700] 
             text-slate-900 '>Find a Doctor :</h2>
            <ul>
              {quicklinks02.map((item, index) => (
                <li key={index} className=''>
                  <Link
                    to={item.path}
                    className='text-[16px]    hover:text-sky-600 font-[400] text-gray-600'>{item.display}</Link>
                </li>

              ))}
            </ul>
          </div>




          <div>

            <h2 className='text-[20px]  font-[700] 
             text-slate-900 '>I Want To Support</h2>
            <ul>
              {quicklinks03.map((item, index) => (
                <li key={index} className=''>
                  <Link
                    to={item.path}
                    className='text-[16px]  font-[400] hover:text-[20px] hover:font-bold hover:text-sky-600 text-gray-600'>{item.display}</Link>
                </li>

              ))}
            </ul>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
