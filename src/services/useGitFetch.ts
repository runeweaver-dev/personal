import React, { useEffect, useState } from 'react';

function useGitFetch(){
  const [repos, setRepos] = useState([]);
  const [error, setError] : any = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getGithubData(){
      try {
        const response = await fetch("https://api.github.com/users/runeweaver-dev/repos");         
        const json = await response.json();
        setRepos(json);
      }catch(e){
        setError(e)
      }finally{
        setLoading(false)
      }
    }
    getGithubData();
  }, []);

  return { repos, loading, error };
}

export default useGitFetch;
