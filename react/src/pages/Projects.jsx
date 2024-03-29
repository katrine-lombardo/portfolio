import React, { useEffect } from "react";
import ListProjects from "../components/ListProjects";

const Projects = () => {
  useEffect(() => {
    document.title = `Projects    ・    Badingo.net`;
  }, []);

  return (
    <div className='flex flex-col justify-center items-center my-9 mx-7'>
      <h1>My Projects</h1>
      <div className='flex flex-col justify-center items-center overflow-y-auto overflow-x-auto'>
        <ListProjects />
      </div>
    </div>
  );
};
export default Projects;
