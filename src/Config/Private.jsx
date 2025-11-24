import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import DashBoard from '../Pages/DashBoard'

const Private = () => {
  const UserId = 
    localStorage.getItem("userId")
  return (
   <div>
    {  !!UserId ? <Outlet/> : <Navigate to= "/" />}
   </div>
  )
  
}

export default Private
