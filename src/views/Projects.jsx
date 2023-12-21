import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import { Octokit } from "octokit";
import ListProjects from "../components/ListProjects";

const token = import.meta.env.GITHUB_TOKEN;
const octokit = new Octokit({
  auth: token,
});

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setIsLoading(true);
        const data = await octokit.request(
          "GET /users/katrine-lombardo/repos",
          {
            username: "katrine-lombardo",
            sort: "updated",
            direction: "desc",
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );
        setRepos(data.data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRepos();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <h1>My Projects</h1>
      <div className='h-[calc(100vh-180px)] w-full flex'>
        <div className='flex-wrap justify-start'>
          {repos.map((repo) => (
            <div className='mb-4'>
              <ListProjects key={repo.id} repo={repo} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Projects;
