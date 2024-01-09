import React from "react";
import { Link } from "react-router-dom";

const CertificationCard = () => {
  return (
    <div className='p-4 flex-1 grow items-center rounded-xl shadow-md'>
      <h2 className='text-lg block align-middle'>Title</h2>
      <h3 className='block align-middle'>
        <Link to={"https://www.google.com"}>Institution</Link>
      </h3>
      <p className='block align-middle'>YYYY</p>
      <p className='text-gray-700 text-base'>Description of the learning.</p>
    </div>
  );
};
