import { Link } from 'gatsby'
import React from 'react'

export default function Navbar() {
  return (
    <nav className=" grid grid-cols-2 mx-auto ">
    <h2 className="text-black text-2xl font-bold mt-5 ml-2">Suhaib Ali</h2>
    <div className=" flex justify-end space-x-4 mr-5 mt-5">
      <Link to="/" className= "text-black font-semibold hover:text-blue-500 hover:bg-neutral-400 rounded-lg transition duration-300 ease-in-out uppercase">
        Home
        </Link>
      <Link to="/project" className="text-black font-semibold hover:text-gray-800 hover:bg-green-300 rounded-lg transition duration-300 ease-in-out uppercase">
        Projects Portfolio
        </Link>
    </div>
  </nav>
  )
}
