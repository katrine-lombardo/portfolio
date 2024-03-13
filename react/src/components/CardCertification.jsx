import React, { useState } from "react";
import { Link } from "react-router-dom";

const CardCertification = ({ certification }) => {
  const { year, title, organization, link, description, imageUrl } =
    certification;

  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`justify-center items-center text-center p-3 w-56 mb-4 h-${
        expanded ? "auto" : "60"
      } shrink-0 m-2 rounded-md shadow-md overflow-hidden relative ${
        expanded ? "" : "overflow-hidden"
      }`}
    >
      <img className='mx-auto' src={imageUrl} alt={title}></img>
      <h2 className='text-sm block align-middle'>{title}</h2>
      <h3 className='block align-middle mb-4'>
        <Link
          to={link}
          className='text-xs text-gray-500'
          target='_blank'
          rel='noopener noreferrer'
        >
          {organization}
        </Link>
      </h3>
      {!expanded && (
        <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-16 flex items-center justify-center'>
          <button
            onClick={handleExpand}
            className='absolute bottom-0 mb-2 text-xs h-4 text-gray-400 bg-gray-100 px-3 pb-1 rounded-full hover:bg-gray-200'
          >
            ・・・
          </button>
        </div>
      )}
      {expanded && (
        <div className='mb-7'>
          <p className='w-fit px-2 mx-auto text-sm my-1 rounded-full bg-slate-100'>
            {year}
          </p>
          <p className='text-gray-700 text-xs text-justify mt-2'>
            {description}
          </p>
          <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-8 flex items-center justify-center'>
            <button
              onClick={handleExpand}
              className='absolute bottom-0 mb-2 text-xs h-4 text-gray-400 bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200'
            >
              ^
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardCertification;
