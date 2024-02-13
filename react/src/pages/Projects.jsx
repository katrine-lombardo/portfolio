import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import { Octokit } from "octokit";
import ListProjects from "../components/ListProjects";
import CardProject from "../components/CardProject";

const token = import.meta.env.GITHUB_TOKEN;
const octokit = new Octokit({
  auth: token,
});

const Projects = () => {
  return (
    <div className='columns-1 p-8'>
      <div className='flex justify-center'>
        <ListProjects />
      </div>
    </div>
  );
};
export default Projects;
