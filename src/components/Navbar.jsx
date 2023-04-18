import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='border-b-4 border-gray-700 text-center fixed top-0 bg-gray-600 font-bold w-full text-lg text-white'>
      <ul>
        <li className='inline-block py-4'>
          <NavLink to="/" className="pl-6 pr-8">
            Home
          </NavLink>
        </li>
        <li className='inline-block py-4'>
          <NavLink to="/articleList" className="pl-6 pr-8">
            Articles
          </NavLink>
        </li>
        <li className='inline-block py-4'>
          <NavLink to="/about" className="pl-6 pr-8">
            About
          </NavLink>
        </li>
      </ul>
      
    </nav>
  )
}

export default Navbar