import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import { Octokit } from "octokit";

const token = import.meta.env.GITHUB_TOKEN;
const octokit = new Octokit({
  auth: token,
});

const ProjectCard = ({ repo }) => {
  const [daysSinceLastUpdate, setDaysSinceLastUpdate] = useState(0);

  useEffect(() => {
    const lastUpdated = new Date(repo.updated_at);
    const now = new Date();
    const diffTime = Math.abs(now - lastUpdated);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    setDaysSinceLastUpdate(diffDays);
  }, [repo]);

  return (
    <div>
      <ul role='list' className='divide-y divide-gray-100'>
        <li className='flex justify-between gap-x-6 py-5'>
          <div className='flex min-w-0 gap-x-4'>
            <img
              className='h-12 w-12 flex-none rounded-full bg-gray-50'
              src='domino.jpeg'
              alt=''
            />
            <div className='min-w-0 flex-auto'>
              <p className='text-sm font-semibold leading-6 text-gray-900'>
                {repo.name}
              </p>
              <p className='mt-1 truncate text-xs leading-5 text-gray-500'>
                {repo.description}
              </p>
            </div>
          </div>
          <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
            <p className='text-sm leading-6 text-gray-900'>{repo.language}</p>
            <p className='mt-1 text-xs leading-5 text-gray-500'>
              Last updated {daysSinceLastUpdate} days ago
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProjectCard;
