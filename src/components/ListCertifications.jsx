import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListCertifications = () => {
  return (
    <div className='flex flex-row items-stretch gap-7'>
      <div className='p-4 flex-1 grow items-center rounded-xl shadow-md'>
        <h2 className='text-lg block align-middle'>
          Software Engineering Bootcamp
        </h2>
        <h3 className='block align-middle'>Hack Reactor</h3>
        <p className='block align-middle'>2023</p>
        <p className='text-gray-700 text-base'>
          In this intensive, 5-month full-time Beginners Coding Bootcamp I
          learned full stack development including React, JavaScript, Python,
          Django, HTML, CSS, and more.
        </p>
      </div>
      <div className='p-4 flex-1 grow items-center rounded-xl shadow-md'>
        <h2 className='text-lg block align-middle'>
          Coaching for Engagement & Performance
        </h2>
        <h3 className='block align-middle'>
          <Link to={"https://www.hci.org/CEP"}>Human Capital Institute</Link>
        </h3>
        <p className='block align-middle'>2022</p>
        <p className='text-gray-700 text-base'>
          During my CEP certification I learned how to influence workplace
          culture, implement coaching approaches, and improve organisational
          results through coaching.
        </p>
      </div>
      <div className='p-4 flex-1 grow items-center rounded-xl shadow-md'>
        <h2 className='font-bold block align-middle'>HR Workforce Analytics</h2>
        <h3 className='block align-middle'>
          <Link to={"https://www.sps.nyu.edu/professional-pathways.html"}>
            NYU School of Professional Studies
          </Link>
        </h3>
        <p className='block align-middle'>2018</p>
        <p className='text-gray-700 text-base'>
          In this course I learned how to analyse metrics that analyze
          historical data, measure current issues, and predict future trends in
          order to provide actionable analytics reporting.
        </p>
      </div>
      <div className='p-4 flex-1 grow items-center rounded-xl shadow-md'>
        <h2 className='font-bold block align-middle'>
          Bachelor of Science, Communications
        </h2>
        <Link to={"https://steinhardt.nyu.edu/"}>New York University</Link>
        <p className='block align-middle'>2014</p>
        <p className='text-gray-700 text-base'>
          As an undergrad I majored in Media, Culture, and Communication from
          the Steinhardt School of Culture, Education, and Human Development,
          with a minor in Italian.
        </p>
      </div>
    </div>
  );
};
export default ListCertifications;
