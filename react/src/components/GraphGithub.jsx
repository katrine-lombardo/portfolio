import React, { useEffect, useState } from "react";

const GitHubContributions = () => {
  const [contributions, setContributions] = useState([]);

  const fetchContributions = async () => {
    const response = await fetch(
      "https://skyline.github.com/katrine-lombardo/2024.json"
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const getContributions = async () => {
      const data = await fetchContributions();
      setContributions(data.contributions);
    };

    getContributions();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-bold mb-4'>GitHub Contributions</h2>
      <div className='grid grid-cols-7 gap-4'>
        {contributions.map((week, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div className='text-sm'>Week {index + 1}</div>
            <div className='flex flex-col items-center'>
              {week.days.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`w-4 h-4 rounded-full ${
                    day.count > 0 ? "bg-green-500" : "bg-gray-200"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GitHubContributions;
