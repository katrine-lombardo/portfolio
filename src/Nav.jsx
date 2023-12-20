import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul className="flex border-b">
        <li className="-mb-px mr-1">
          <NavLink
            className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="mr-1">
          <NavLink
            className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li className="mr-1">
          <NavLink
            className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            to="/skills"
          >
            Skills
          </NavLink>
        </li>
        <li className="mr-1">
          <NavLink
            className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Nav;
