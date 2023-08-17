import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
export default function Layout({children}) {
  return (
    <div className='h-screen bg-yellow-100'>  
    <Navbar/>
    <div>
      {children}
    </div>
    <footer >
        <p className='text-sm text-center text-black mt-10'>&copy; Copyright of Arumy</p>
    </footer>
    </div>
  )
}
