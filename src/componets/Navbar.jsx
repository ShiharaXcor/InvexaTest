import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div>


            <ul className='flex  flex-row  gap-5 bg-red-100  rounded-full justify-evenly'>
              <NavLink   to='/'  ><li>Home</li></NavLink>
               <NavLink to='/page1'><li>page1</li></NavLink>
               <NavLink to='/page2'><li>page2</li></NavLink>
            </ul>
        </div>



      
    </div>
  )
}

export default Navbar
