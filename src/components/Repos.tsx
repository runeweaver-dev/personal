import React from 'react';
import useGitFetch from '../services/useGitFetch';

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

  return (<>

    {repos.map((repo) => (
      <>
        <div>{repo["name"]}</div>
        <div>{repo["description"]}</div>
      </>
    ))}

  </>)
}

export default Repos;
