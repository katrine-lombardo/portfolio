import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import { Octokit } from "octokit";

const token = import.meta.env.GITHUB_TOKEN;
const octokit = new Octokit({
  auth: token,
});

const ListProjects = () => {
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
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          }
        );
        setRepos(data.data);
        console.log(data.data);
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
      <div>
        <h1>My Projects</h1>
      </div>
      <div className='h-[calc(100vh-180px)] flex items-center justify-center mx-20'>
        {repos.map((repo, index) => (
          <div key={index} className='col'>
            <li>{repo.name}</li>
          </div>
        ))}
      </div>
    </>
  );
};
export default ListProjects;
