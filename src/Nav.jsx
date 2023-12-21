import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul className='flex'>
        <li className='mr-6'>
          <NavLink to='/' end>
            <img
              src='badingo_clean.png'
              className='w-12 rounded-lg ...'
              alt='badingo_clean'
            />
          </NavLink>
        </li>
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
    </>
  );
}

export default Nav;
