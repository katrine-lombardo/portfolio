import React from "react";
import { Link } from "react-router-dom";

const CardContact = ({ contact }) => {
  const { method, img, text, url } = contact;

  const handleClick = (e) => {
    e.preventDefault();
    window.open(url, "_blank");
  };

  return (
    <div
      className='flex flex-col items-center m-3 px-2 rounded-md border border-rose-100 shadow-md
    bg-gradient-to-br from-rose-50 to-rose-100
    hover:text-rose-600
    hover:border-rose-200
    hover:bg-gradient-to-br hover:from-rose-100 hover:to-rose-200
    hover:shadow-lg'
    >
      <a
        href={url}
        onClick={handleClick}
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src={img}
          className='mx-auto size-16 shrink-0 min-w-16 my-2'
          alt={method}
        ></img>
        <p className='text-sm text-rose-600 mb-3'>{text}</p>
      </a>
    </div>
  );
};
export default CardContact;
