import React from 'react';
import useCommitFetch from '../services/useCommitFetch';

function CommitData(repoName: string){
  
  let { commits, loading, error } = useCommitFetch();

  if(error){
      return (<div>Commits unavailable</div>)
  }

  if(loading){
      return (<div>Loading...</div>)
  }

  commits = commits.slice(0, 3);

  return (<>
    <p>Latest commits</p>
    {
        commits.map((commit: any) => {
          console.log(commit);
          return <p>{ commit["commit"]["message"]}</p>
        })
    }
    </>)

}

export default CommitData;
