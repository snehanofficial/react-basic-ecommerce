import React from 'react'
import { Link } from 'react-router-dom'
import useAuthStore from '../hooks/useAuthStore'

export default function Navbar() {
  const user = useAuthStore();
  return (
    <nav className='flex justify-between whitespace-nowrap items-center bg-gray-800 p-5 text-white text-lg shadow-md'>
      <div className="pl-8 font-bold"><Link to='/'>SS Mart</Link></div>
      <div className='border border-gray-500 px-4 py-1 ml-4 rounded-4xl w-[50%]'><input type="text" placeholder='Search for Products' className='focus:outline-none w-[97%]'/></div>
      <div className="">
        <Link to='/cart' className='p-8'>Cart</Link>
        <Link to='/orders' className='p-8'>Orders</Link>

        
        {!user.isLoggedin && <Link to={`/login`} className='p-8'>Login</Link>}
        {user.isLoggedin && <Link to={`/logout`} className='p-8'>{user.name.toUpperCase()}, Logout</Link>}

      </div>
    </nav>
  )
}
