import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='fixed inset-x-0 bottom-0'>
      <div className='flex flex-wrap justify-center items-center gap-x-1 bg-gradient-to-tl from-slate-50 to-slate-100 text-sm'>
        Icons by{" "}
        <Link
          to='https://icons8.com'
          target='_blank'
          rel='noopener noreferrer'
          className='text-rose-500 hover:text-rose-700 visted:text-rose-800'
        >
          Icons8
        </Link>{" "}
        ・ Site by <NavLink to='/messages'> Katrine</NavLink> ・ Inspiration by
        <NavLink
          to='/badingo'
          className='text-rose-500 hover:text-rose-700 visted:text-rose-800'
        >
          {" "}
          Domino
        </NavLink>
      </div>
    </footer>
  );
};
export default Footer;
