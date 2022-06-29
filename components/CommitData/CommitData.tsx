import React from 'react';
import useCommitFetch from '../services/useCommitFetch';
import Commit from './Commit';
import '../styles/CommitData.scss';

function CommitData({ repoName } : { repoName: string }){

  let { commits, loading, error } = useCommitFetch(repoName);

  if(error){
    return (<div>Commits unavailable</div>)
  }

  if(loading){
    return (<div>Loading...</div>)
  }

  commits = commits.slice(0, 3);

  return (<div className="CommitData">
      <p className="recent-commits">Recent Commits</p>
      <div className="commits-wrapper">
      {
      commits.map((commit: any) => {
          return <Commit {...commit} />
          })
      }   
      </div>

      </div>)

}

export default CommitData;
