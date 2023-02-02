import useGitFetch from '@/services/useGitFetch';
import Repo from '@/components/RepoBlock/Repo/Repo';

function Repos() {
  
  let { repos, loading, error } = useGitFetch();

  if(error){
      return (<h1>{error}</h1>);
  }

  if(loading){
      return (<h1>Loading..</h1>);
  }

  return (
    <>
      {repos.map((repo) => (
        <Repo repoData={repo} />
      ))}
    </>
  )
}

export default Repos;
