import React, { useEffect } from "react";
import ListProjects from "../components/ListProjects";

const Projects = () => {
  useEffect(() => {
    document.title = `Projects    ・    Badingo.net`;
  }, []);

  return (
    <div className='flex flex-col p-8'>
      <h1>My Projects</h1>
      <div className=' justify-center'>
        <ListProjects />
      </div>
    </div>
  );
};
export default Projects;
