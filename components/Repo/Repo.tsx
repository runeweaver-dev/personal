import React from 'react';
import CommitData from '../CommitData/CommitData';
import styles from './Repo.module.scss';

function Repo({ repoData } : { repoData : any}){

  function formatName(name: string){
    let formattedName = name.replaceAll("_", " ");
    let words : string[] = formattedName.split(" ");
    formattedName = words.map(word => {
        return word.charAt(0).toUpperCase() + word.substring(1);
      }).join(" ");
    return formattedName;
  }

  return (
    <div className={styles.Repo}>
      <h3>{formatName(repoData.name)}</h3>
      <h4 className={styles.languageBanner}>{repoData.language}</h4>
      <div className={styles.repoContainer}>
        <p>{repoData.description}</p>
        <div>
          <CommitData repoName={repoData.name} />
        </div>
      </div>
    </div>
  )
}

export default Repo;
