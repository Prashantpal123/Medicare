import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Doctors from '../pages/Doctors/Doctors'
import Doctordetail from '../pages/Doctors/doctordetail'
import {Routes,Route} from 'react-router-dom'
import MyAcount from '../Dashboard/User-acount/MyAcount'
import Dashboard from '../Dashboard/Doctor-acount/Dashboard'
import ProtectiveRoute from './ProtectiveRoute'

const Routers = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/doctors' element={<Doctors/>} />
    <Route path='/doctors/:id' element={<Doctordetail/>} />
    <Route path='/register' element={<Signup/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/service' element={<Services/>} />
    <Route path='/contact' element={<Contact/>} />
   
    <Route path='/users/profile/me' element={ <ProtectiveRoute allowedRoles={'patient'}> <MyAcount/></ProtectiveRoute>} />
  

      <Route path='/doctors/profile/me' element={ <ProtectiveRoute allowedRoles={'doctor'}><Dashboard/> </ProtectiveRoute> } />
      </Routes>
  )
}

export default Routers
