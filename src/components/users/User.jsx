import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../admin/Navbar'

function User() {
    let [user, setUser] = useState(true);
  return (
    <div className='h-screen w-full flex flex-col overflow-hidden bg-gray-50'>
      <Navbar isUser={user}/>

      <div className="overflow-auto ">
          <Outlet />
        </div>
    </div>
  )
}

export default User
