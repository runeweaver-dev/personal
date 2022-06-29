import React from 'react';
import useCommitFetch from '../../services/useCommitFetch';
import Commit from '../Commit/Commit';
import styles from './CommitData.module.scss';

function CommitData({ repoName } : { repoName: string }){

  let { commits, loading, error } = useCommitFetch(repoName);

  if(error){
    return (<div>Commits unavailable</div>)
  }

  if(loading){
    return (<div>Loading...</div>)
  }

  commits = commits.slice(0, 3);

  return (<div className={styles.CommitData}>
      <p className={styles.recentCommits}>Recent Commits</p>
      <div>
      {
      commits.map((commit: any) => {
          return <Commit {...commit} />
          })
      }   
      </div>

      </div>)

}

export default CommitData;
