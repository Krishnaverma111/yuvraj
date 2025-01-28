import React from 'react'
import logo from "./Assets/logo/logo.jpg"
import{Link} from "react-router-dom";

export default function Navbar() {
  return (
    <nav className='flex justify-between bg-black py-6 text-white items-center'>
      <div >
        <img className='h-20 w-20 rounded-full border-red-300 border-2' src={logo} alt="" />
      </div>

      <ul className='flex justify-between gap-10 '>
        <li className='hover:text-red-300 font-bold active:text-blue-700  hover:border-b-4 hover:border-red-600' ><Link to="/card">Card</Link></li>
        <li className='hover:text-red-300 font-bold active:text-blue-700  hover:border-b-4 hover:border-red-600'><Link to="/form">Form</Link></li>
        <li className='hover:text-red-300 font-bold active:text-blue-700  hover:border-b-4 hover:border-red-600'><Link to="/box">Box</Link></li>
        <li className='hover:text-red-300 font-bold active:text-blue-700  hover:border-b-4 hover:border-red-600'>SERVICES</li>
      </ul>

      <div >
        <input type="text" name="" id="" />
        <button className='font-bold hover:text-red-300'>submit</button>
      </div>

      
    </nav>
  )
}
