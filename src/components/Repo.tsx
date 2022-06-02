import React from 'react';
import CommitData from './CommitData';
import '../styles/Repo.scss';

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
    <div className="Repo">
      <h3>{formatName(repoData.name)}</h3>
      <h4 className="language-banner">{repoData.language}</h4>
      <div className="repo-container">
        <p>{repoData.description}</p>
        <div>
          <CommitData {...repoData.name} />
        </div>
      </div>
    </div>
  )
}

export default Repo;
