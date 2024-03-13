import { NavLink, useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setOpenNav(false);
  }, [location]);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const navigateAndCloseMenu = (path) => {
    navigate(path);
    setOpenNav(false);
  };

  const getNavLinkClass = (isActive) =>
    isActive
      ? "text-rose-500 hover:text-rose-700 underline underline-offset-8"
      : "text-gray-600 hover:text-rose-800";

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/contact", label: "Contact" },
  ];

  const navList = () =>
    navLinks.map((link) => (
      <NavLink
        key={link.path}
        onClick={() => navigateAndCloseMenu(link.path)}
        className={({ isActive }) => getNavLinkClass(isActive)}
        to={link.path}
        end
      >
        {link.label}
      </NavLink>
    ));

  const MenuIcon = ({ path }) => (
    <svg
      className='fill-current h-3 w-3'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d={path} />
    </svg>
  );

  return (
    <div className='flex items-center justify-between sticky top-0 bg-gradient-to-tl from-slate-50 to-slate-100 md:w-full mb-5 py-6 px-6'>
      <NavLink to='/' end>
        <img
          src='/images/badingo_busted.png'
          className='min-w-12 max-w-12 rounded-lg hue-rotate-15'
          alt='badingo logo'
        />
      </NavLink>
      <div className='md:flex md:flex-grow'></div>
      <div className='hidden md:flex md:justify-between md:gap-x-4'>
        {navList()}
      </div>
      <div
        className={`${
          openNav ? "justify-around" : "hidden"
        } md:hidden flex grow items-center justify-between w-fit`}
      >
        {navList()}
      </div>
      <button
        onClick={toggleNav}
        className='block md:hidden items-center px-3 py-2 rounded-md shadow-md shadow-slate-300 text-rose-600 border-rose-200
        bg-gradient-to-br from-rose-50 to-rose-100
        hover:text-rose-600
        hover:border-rose-300
        hover:bg-gradient-to-br hover:from-rose-100 hover:to-rose-200
        hover:shadow-lg'
      >
        {openNav ? (
          <MenuIcon path='M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z' />
        ) : (
          <MenuIcon path='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
        )}
      </button>
    </div>
  );
};

export default Nav;
