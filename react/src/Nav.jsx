import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const navList = () => {
    return (
      <>
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
      </>
    );
  };

  return (
    <div className='flex items-center justify-between flex-wrap sticky top-0 bg-gradient-to-r from-slate-50 to-slate-100 w-screen mb-5 p-6 gap-6'>
      <div className='block'>
        <NavLink to='/' end>
          <img
            src='/images/badingo_clean.png'
            className='min-w-12 max-w-12 rounded-lg'
            alt='badingo logo'
          />
        </NavLink>
        <div className='shrink w-fit'></div>
      </div>
      <nav className='hidden md:flex space-x-4'>{navList()}</nav>
      <div
        className={`${
          openNav ? "" : "hidden"
        } flex items-center justify-between gap-8`}
      >
        {navList()}
      </div>

      <button
        onClick={toggleNav}
        className='block md:hidden items-center px-3 py-2 border rounded text-rose-300 border-rose-300 bg-rose-100 hover:text-rose-600 hover:border-rose-600 hover:bg-rose-200'
      >
        {openNav ? (
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Close</title>
            <path d='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
          </svg>
        ) : (
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Nav;
