import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import CardProject from "./CardProject";
import Loading from "../Loading";

const token = import.meta.env.GITHUB_TOKEN;
const octokit = new Octokit({
  auth: token,
});

const ListProjects = ({ repo }) => {
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
      <div className='h-[calc(100vh-180px)] w-full justify-center flex'>
        <div className='flex-wrap rounded-lg border-2 p-6 m-6 overflow-y-auto'>
          {repos.map((repo) => (
            <div className='mb-4'>
              <CardProject key={repo.id} repo={repo} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ListProjects;
