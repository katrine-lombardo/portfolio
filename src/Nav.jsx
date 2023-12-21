import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className='mb-8'>
        <ul className='flex p-6'>
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
                  ? "text-blue-900 hover:text-blue-800"
                  : "text-blue-500 hover:text-blue-800"
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
                  ? "text-blue-900 hover:text-blue-800"
                  : "text-blue-500 hover:text-blue-800"
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
                  ? "text-blue-900 hover:text-blue-800"
                  : "text-blue-500 hover:text-blue-800"
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
                  ? "text-blue-900 hover:text-blue-800"
                  : "text-blue-500 hover:text-blue-800"
              }
              to='/about'
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
