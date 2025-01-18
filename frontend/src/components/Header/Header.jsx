import React from 'react'
import { useEffect,useRef } from 'react';
import {NavLink,Link} from 'react-router-dom';
import userImg from '../../assets/ravi.jpg';
import logo from '../../assets/logo.png';
import {BiMenu} from "react-icons/bi";
const navLinks =[
 {
  path:'/home',
  display:'Home'
 },
 {
  path:'/Doctors',
  display:'Find a Doctor'
 },
 {
  path:'/service',
  display:'Services'
 },
 {
  path:'/contact',
  display:'Contact'
 },

]

const Header = () => {
  const headerRef =useRef(null)
  const menuRef= useRef(null)
  const handlestickyheader=()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 ||document.documentElement.scrollTop>80)
      {
        headerRef.current.classList.add('sticky_header')
      }
      else
      {
        headerRef.current.classList.remove('sticky_header')
      }

    })

  

  }


  useEffect(()=>{
    handlestickyheader()
    return ()=>window.removeEventListener('scroll',handlestickyheader)

  })

  const toggleMenu =()=>{
    menuRef.current.classList.toggle('showmenu')
  }

  return (
   <header className='header w-full  ' ref={headerRef}>
 <div className="flex justify-center w-full header ">
  <div className='flex w-full header  justify-between md:mx-52 marginhead navbar'>
     {/* --------------logo---------*/}
 
 <div className='flex items-center  '>
  <img className=' lg:h-14' src={logo}  alt="logo" />
 </div>

 {/*-----------menu-----*/}
 <div className='navigation flex ' ref={menuRef} onClick={toggleMenu} >
  <ul className='menu flex items-center gap-[100px] '>
    {

navLinks.map((Link,index)=><li key={index}>
  <NavLink to={Link.path} className={navClass=>navClass.isActive?"text-blue-600 md:text-[23px] leading-7 font-[600]":'text-zinc-600 lg:text-[23px] leading-7 font-[600] hover:text-slate-400'}>{Link.display}</NavLink>
</li>
    )
    }
  </ul>
  
   </div>
   {/*---------------menue right-------------*/}

<div className='flex items-center gap-'>
  <div className='hidden'>
    <Link to="/">
    <figure className='w-[35px] h-[35px] rounded-full flex items-center'>
      <img className='w-full rounded-[700px]' src={userImg } alt="img" />

    </figure>
    </Link>
   
  </div>


  <Link to='/login'
  className=' bg-sky-600 rounded-[50px]  hover:bg-sky-700 '>
    <button className='text-white py-1 px-3  md:py-2 md:px-6 md:text-[20px]  font-[600] md:h-[44px]  '>
      Login
    </button>
    </Link>

    <span className='md:hidden menuicon' onClick={toggleMenu}>
    <BiMenu className='w-10 h-16 cursor-pointer'/>
    </span>
    
</div>
  </div>
 
  
 
 </div>

   </header>
  )
}

export default Header
