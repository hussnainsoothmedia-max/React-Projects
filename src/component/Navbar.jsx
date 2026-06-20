import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-900 text-white py-2'>
      <div className="logo">
        <span className="flex font-bold mx-9">iTask</span>
      </div>
      <ul className="flex gap-5 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all duration-200'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-200' >Your tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
