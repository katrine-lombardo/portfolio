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
            sort: "pushed",
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
    <div className='flex flex-wrap items-start justify-center'>
      {repos.map((repo) => (
        <div className='p-4'>
          <CardProject key={repo.id} repo={repo} />
        </div>
      ))}
    </div>
  );
};

export default ListProjects;
