import React, { useState, useEffect } from 'react';

function useCommitFetch(repo: string){

  const [commits, setCommits] = useState([]);
  const [error, setError] : any = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getGithubData(repo: string){
      try {
        const response = await fetch(`https://api.github.com/repos/cameronraw/${repo}/commits`);         
        const json = await response.json();
        setCommits(json);
      }catch(e){
        setError(e)
      }finally{
        setLoading(false)
      }
    }
    getGithubData(repo);
  }, []);

  return { commits, loading, error };

}

export default useCommitFetch;
