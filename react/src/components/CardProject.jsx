import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

const CardProject = ({ repo }) => {
  const [daysSinceLastUpdate, setDaysSinceLastUpdate] = useState(0);
  const [imageSrc, setImageSrc] = useState(
    "./images/github_template_image.png"
  );

  useEffect(() => {
    const lastUpdated = new Date(repo.pushed_at);
    const now = new Date();
    const diffTime = Math.abs(now - lastUpdated);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    if (lastUpdated.getTime() === currentDate.getTime()) {
      setDaysSinceLastUpdate(-1);
    } else {
      setDaysSinceLastUpdate(diffDays);
    }

    const imagePath = `./images/github_${repo.id}.png`;
    const img = new Image();
    img.src = imagePath;
    img.onload = () => setImageSrc(imagePath);
    img.onerror = () => setImageSrc("./images/github_tbd.png");
  }, [repo]);

  return (
    <div className='flex max-w-sm flex-col overflow-hidden rounded-xl bg-white text-gray-700 shadow-md'>
      <div className='m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border'>
        <img src={imageSrc} alt='github repo image' />
      </div>
      <div className='p-6'>
        <div className='flex flex-wrap justify-between'>
          <Link
            to={repo.html_url}
            className='font-semibold leading-6 text-gray-800 text-left'
            target='_blank'
            rel='noopener noreferrer'
          >
            {repo.name}
          </Link>
          <p className='text-xs text-gray-400'>
            {daysSinceLastUpdate === 1
              ? "Updated today"
              : `Last push ${daysSinceLastUpdate} days ago`}
          </p>
        </div>
        <p className='mt-1 truncate text-xs leading-5 text-gray-500 text-wrap text-left'>
          {repo.description}
        </p>
        <div className='flex flex-wrap items-end justify-between mt-3'>
          <div className='h-fit items-center rounded-sm bg-gray-50 px-2 py-1 text-xs text-gray-400'>
            {repo.language}
          </div>
          <button className='overflow-y-hidden px-3 py-2 border rounded text-rose-300 border-rose-300 bg-rose-100 hover:text-rose-600 hover:border-rose-600 hover:bg-rose-200 transition  hover:-translate-y-1 '>
            <Link
              to={repo.html_url}
              className=''
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='flex'>
                <p className='text-sm'>Go to {repo.name}</p>
                <svg viewBox='0 0 60 60' className='w-5 h-5 fill-current ml-1'>
                  <path d='M17.791,46.836c0.711,-0.306 1.209,-1.013 1.209,-1.836v-5.4c0,-0.197 0.016,-0.402 0.041,-0.61c-0.014,0.004 -0.027,0.007 -0.041,0.01c0,0 -3,0 -3.6,0c-1.5,0 -2.8,-0.6 -3.4,-1.8c-0.7,-1.3 -1,-3.5 -2.8,-4.7c-0.3,-0.2 -0.1,-0.5 0.5,-0.5c0.6,0.1 1.9,0.9 2.7,2c0.9,1.1 1.8,2 3.4,2c2.487,0 3.82,-0.125 4.622,-0.555c0.934,-1.389 2.227,-2.445 3.578,-2.445v-0.025c-5.668,-0.182 -9.289,-2.066 -10.975,-4.975c-3.665,0.042 -6.856,0.405 -8.677,0.707c-0.058,-0.327 -0.108,-0.656 -0.151,-0.987c1.797,-0.296 4.843,-0.647 8.345,-0.714c-0.112,-0.276 -0.209,-0.559 -0.291,-0.849c-3.511,-0.178 -6.541,-0.039 -8.187,0.097c-0.02,-0.332 -0.047,-0.663 -0.051,-0.999c1.649,-0.135 4.597,-0.27 8.018,-0.111c-0.079,-0.5 -0.13,-1.011 -0.13,-1.543c0,-1.7 0.6,-3.5 1.7,-5c-0.5,-1.7 -1.2,-5.3 0.2,-6.6c2.7,0 4.6,1.3 5.5,2.1c1.699,-0.701 3.599,-1.101 5.699,-1.101c2.1,0 4,0.4 5.6,1.1c0.9,-0.8 2.8,-2.1 5.5,-2.1c1.5,1.4 0.7,5 0.2,6.6c1.1,1.5 1.7,3.2 1.6,5c0,0.484 -0.045,0.951 -0.11,1.409c3.499,-0.172 6.527,-0.034 8.204,0.102c-0.002,0.337 -0.033,0.666 -0.051,0.999c-1.671,-0.138 -4.775,-0.28 -8.359,-0.089c-0.089,0.336 -0.197,0.663 -0.325,0.98c3.546,0.046 6.665,0.389 8.548,0.689c-0.043,0.332 -0.093,0.661 -0.151,0.987c-1.912,-0.306 -5.171,-0.664 -8.879,-0.682c-1.665,2.878 -5.22,4.755 -10.777,4.974v0.031c2.6,0 5,3.9 5,6.6v5.4c0,0.823 0.498,1.53 1.209,1.836c9.161,-3.032 15.791,-11.672 15.791,-21.836c0,-12.682 -10.317,-23 -23,-23c-12.683,0 -23,10.318 -23,23c0,10.164 6.63,18.804 15.791,21.836z'></path>
                </svg>
              </div>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
