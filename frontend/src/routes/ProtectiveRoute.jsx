import React from 'react'
import { useContext } from 'react'

import { authContext } from '../context/Authcontext'
import { Navigate, useNavigate } from 'react-router-dom'

const ProtectiveRoute = ({children, allowedRoles}) => {
    const {token,role} =useContext(authContext)
    const  isallowed= allowedRoles.includes(role)
    const accessibleRoute =token && isallowed? children: <Navigate to={"/login"} replace={true} />
  return accessibleRoute;
}

export default ProtectiveRoute

