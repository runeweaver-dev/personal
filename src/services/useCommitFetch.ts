import React, { useState, useEffect } from 'react';

function useCommitFetch(){

  const [commits, setCommits] = useState([]);
  const [error, setError] : any = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getGithubData(){
      try {
        const response = await fetch("https://api.github.com/repos/runeweaver-dev/personal/commits");         
        const json = await response.json();
        setCommits(json);
      }catch(e){
        setError(e)
      }finally{
        setLoading(false)
      }
    }
    getGithubData();
  }, []);

  return { commits, loading, error };

}

export default useCommitFetch;
