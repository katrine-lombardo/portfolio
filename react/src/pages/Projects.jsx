import React, { useEffect } from "react";
import ListProjects from "../components/ListProjects";

const Projects = () => {
  useEffect(() => {
    document.title = `Projects    ・    Badingo.net`;
  }, []);

  return (
    <div className='flex flex-col'>
      <h1>My Projects</h1>
      <div className='justify-items-center'>
        <ListProjects />
      </div>
    </div>
  );
};
export default Projects;
