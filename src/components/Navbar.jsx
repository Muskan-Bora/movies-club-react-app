import React from 'react'
import Logo from '../movie-logo2.png'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-10 py-4 bg-slate-200'>
      <img className='w-[80px] rounded-lg' src={Logo} alt=""/>

      <Link to='/' className='text-blue-900 text-xl bg-sky-0 hover:bg-sky-900 hover:text-zinc-50 p-3 rounded-lg'><b>All Movies</b></Link>

      <Link to='/watchlist' className='text-blue-900 text-xl bg-sky-0 hover:bg-sky-900 hover:text-zinc-50 p-3 rounded-lg'><b>My Watchlist</b></Link>
    </div>
  )
}

export default Navbar

