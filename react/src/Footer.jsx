import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='fixed inset-x-0 bottom-0'>
      <div className='bg-gradient-to-r from-slate-50 to-slate-100 text-sm'>
        Icons by{" "}
        <Link to='https://icons8.com' target='_blank' rel='noopener noreferrer'>
          Icons8
        </Link>{" "}
        ・ Site by Katrine ・ Inspiration by Domino
      </div>
    </footer>
  );
};
export default Footer;
