import React from 'react';
import Commit from '@/components/RepoBlock/Commit/Commit';
import styles from './CommitData.module.scss';

function CommitData({ commitData }){

    console.log(commitData)

  const commits = commitData.slice(0, 3);

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
