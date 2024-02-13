import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

const CardProject = ({ repo }) => {
  const [daysSinceLastUpdate, setDaysSinceLastUpdate] = useState(0);

  useEffect(() => {
    const lastUpdated = new Date(repo.updated_at);
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
  }, [repo]);

  return (
    <div className='container'>
      <ul role='list' className='divide-y divide-gray-100 w-full'>
        <li className='flex justify-between gap-x-6 py-5'>
          <div className='flex min-w-0 gap-x-4'>
            <img
              className='h-12 w-12 flex-none rounded-full bg-gray-50'
              src='logos/github_logo.webp'
              alt=''
            />
            <div className='min-w-0 flex-auto'>
              <Link
                to={repo.html_url}
                className='text-sm font-semibold leading-6 text-gray-900 text-left'
                target='_blank'
                rel='noopener noreferrer'
              >
                <p className='text-sm font-semibold leading-6 text-gray-900 text-left'>
                  {repo.name}
                </p>
              </Link>
              <p className='mt-1 truncate text-xs leading-5 text-gray-500 text-wrap text-left'>
                {repo.description}
              </p>
            </div>
          </div>
          <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
            <p className='text-sm leading-6 text-gray-900'>{repo.language}</p>
            <p className='mt-1 text-xs leading-5 text-gray-500'>
              {daysSinceLastUpdate === -1
                ? "Updated today"
                : `Last updated ${daysSinceLastUpdate} days ago`}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CardProject;
