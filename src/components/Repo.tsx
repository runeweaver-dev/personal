import React from 'react';

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
      <h4>Main Language: {repoData.language}</h4>
      <p><strong>Description: </strong>{repoData.description}</p>
      
    </div>
  )
}

export default Repo;
