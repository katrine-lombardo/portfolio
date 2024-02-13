import React from "react";
import ListProjects from "../components/ListProjects";

const Projects = () => {
  return (
    <div className='columns-1 p-8'>
      <h1>My Projects</h1>
      <div className='flex justify-center'>
        <ListProjects />
      </div>
    </div>
  );
};
export default Projects;
