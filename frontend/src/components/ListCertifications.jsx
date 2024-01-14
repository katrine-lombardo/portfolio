import React from "react";
import { Link } from "react-router-dom";

const ListCertifications = () => {
  return (
    <div className='flex flex-row items-stretch gap-5'>
      <div className='p-3 flex-1 grow items-center rounded-xl shadow-md'>
        <p className='w-fit px-2 mx-auto text-sm my-1 rounded-full bg-slate-100'>
          2023
        </p>
        <h2 className='text-base block align-middle'>
          Software Engineering Bootcamp
        </h2>
        <h3 className='block align-middle'>
          <Link
            to={
              "https://www.galvanize.com/hack-reactor/beginner/full-time-bootcamp/"
            }
            className='text-sm text-gray-500'
          >
            Hack Reactor
          </Link>
        </h3>
        <p className='text-gray-700 text-xs text-justify mt-2'>
          In this intensive, 5-month full-time Beginners Coding Bootcamp I
          learned full stack development including React, JavaScript, Python,
          Django, HTML, CSS, and more.
        </p>
      </div>
      <div className='p-3 flex-1 grow items-center rounded-xl shadow-md'>
        <p className='w-fit px-2 mx-auto text-sm my-1 rounded-full bg-slate-100'>
          2022
        </p>
        <h2 className='text-base block align-middle'>
          Coaching for Engagement & Performance
        </h2>
        <h3 className='block align-middle'>
          <Link
            to={"https://www.hci.org/CEP"}
            className='text-sm text-gray-500'
          >
            Human Capital Institute
          </Link>
        </h3>
        <p className='text-gray-700 text-xs text-justify mt-2'>
          During my CEP certification I learned how to influence workplace
          culture, implement coaching approaches, and improve organisational
          results through coaching.
        </p>
      </div>
      <div className='p-3 flex-1 grow items-center rounded-xl shadow-md'>
        <p className='w-fit px-2 mx-auto text-sm my-1 rounded-full bg-slate-100'>
          2018
        </p>
        <h2 className='text-base block align-middle'>HR Workforce Analytics</h2>
        <h3 className='block align-middle'>
          <Link
            to={"https://www.sps.nyu.edu/professional-pathways.html"}
            className='text-sm text-gray-500'
          >
            New York University
          </Link>
        </h3>
        <p className='text-gray-700 text-xs text-justify mt-2'>
          In this course I learned how to analyse metrics that analyze
          historical data, measure current issues, and predict future trends in
          order to provide actionable analytics reporting.
        </p>
      </div>
      <div className='p-3 flex-1 grow items-center rounded-xl shadow-md'>
        <p className='w-fit px-2 mx-auto text-sm my-1 rounded-full bg-slate-100'>
          2014
        </p>
        <h2 className='text-base block align-middle'>
          Bachelor of Science, Communications
        </h2>
        <Link
          to={"https://steinhardt.nyu.edu/"}
          className='text-sm text-gray-500'
        >
          New York University
        </Link>
        <p className='text-gray-700 text-xs text-justify mt-2'>
          As an undergrad I majored in Media, Culture, and Communication from
          the Steinhardt School of Culture, Education, and Human Development,
          with a minor in Italian.
        </p>
      </div>
    </div>
  );
};
export default ListCertifications;
