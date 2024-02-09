import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className='bg-gradient-to-r from-slate-50 to-slate-100 w-screen mb-5'>
        <ul className='flex items-center justify-center p-6'>
          <li className='mr-6'>
            <NavLink to='/' end>
              <img
                src='badingo_clean.png'
                className='w-12 rounded-lg'
                alt='badingo_clean'
              />
            </NavLink>
          </li>
          <li className='flex-grow'></li>
          <li className='mr-6'>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-rose-900 hover:text-rose-800 underline underline-offset-8"
                  : "text-rose-500 hover:text-rose-700"
              }
              to='/'
              end
            >
              Home
            </NavLink>
          </li>
          <li className='mr-6'>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-rose-900 hover:text-rose-800 underline underline-offset-8"
                  : "text-rose-500 hover:text-rose-700"
              }
              to='/projects'
            >
              Projects
            </NavLink>
          </li>
          <li className='mr-6'>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-rose-900 hover:text-rose-800 underline underline-offset-8"
                  : "text-rose-500 hover:text-rose-700"
              }
              to='/skills'
            >
              Skills
            </NavLink>
          </li>
          <li className='mr-6'>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-rose-900 hover:text-rose-800 underline underline-offset-8"
                  : "text-rose-500 hover:text-rose-700"
              }
              to='/contact'
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
