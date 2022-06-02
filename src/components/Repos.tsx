import React from 'react';
import useGitFetch from '../services/useGitFetch';
import Repo from './Repo';

function Repos(){
  
  let { repos, loading, error } = useGitFetch();

  if(error){
      return (<h1>Repos could not be loaded</h1>);
  }

  if(loading){
      return (<h1>Loading..</h1>);
  }

  
  repos.sort((a,b) => new Date(b["updated_at"]).getTime() - new Date(a["updated_at"]).getTime());

  repos = repos.slice(0, 3);
  console.log(repos)

  return (
    <div className="Repos">
      <h2>Recently Updated Projects</h2>
      {repos.map((repo) => (
        <Repo repoData={repo} />
      ))}
    </div>
  )
}

export default Repos;
