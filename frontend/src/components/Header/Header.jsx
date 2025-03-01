import React from 'react'
import { useEffect,useRef,useContext } from 'react';
import {NavLink,Link} from 'react-router-dom'; 
import logo from '../../assets/logo.png';
import {BiMenu} from "react-icons/bi";
import userImg  from "../../assets/avatar-icon.png"
import  {authContext}  from '../../context/Authcontext.jsx';

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
  const {user,role,token}=useContext(authContext)
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
  <img className=' ' src={logo}  alt="logo" />
 </div>

 {/*-----------menu-----*/}
 <div className='navigation flex ' ref={menuRef} onClick={toggleMenu} >
  <ul className='menu flex items-center gap-[100px] '>
    {

navLinks.map((Link,index)=><li key={index}>
  <NavLink to={Link.path} className={navClass=>navClass.isActive?"text-blue-600 md:text-[18px] leading-7 font-[600]":'text-zinc-600 lg:text-[18px] leading-7 font-[600] hover:text-slate-400'}>{Link.display}</NavLink>
</li>
    )
    }
  </ul>
  
   </div>
   {/*---------------menue right-------------*/}


  {token && user ? <div className='flex items-center gap-'>
     
      
      <Link to={`${role=="doctor"?"/doctors/profile/me":"/users/profile/me"}`}>
    <figure className=' mx-2   flex items-center'>
      <img className='rounded-full object-cover w-10 h-10 -1' src={user.photo} alt="img" />

    </figure></Link>
    <span className='md:hidden menuicon' onClick={toggleMenu}>
    <BiMenu className='w-10 h-9 cursor-pointer'/>
    </span>
    
   
  </div>:<div className='flex '>
 
 


  <Link to='/login'
  className=''>
    <button className='text-white mt-4 md:mt-4 md:mx-3  bg-sky-600 rounded-[20px]  hover:bg-sky-700 py-1
     px-3  md:py-1 md:my-2 md:px-4 md:text-[18px]  font-[600]   '>
      Login
    </button>
    </Link>

    <span className='md:hidden menuicon' onClick={toggleMenu}>
    <BiMenu className='w-10 h-16 cursor-pointer'/>
    </span>
    
</div>}
  
  </div>
 
  
 
 </div>

   </header>
  )
}

export default Header
