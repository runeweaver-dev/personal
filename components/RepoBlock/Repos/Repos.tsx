import useGitFetch from '@/services/useGitFetch';
import Repo from '@/components/RepoBlock/Repo/Repo';
import LoadingSpinner from '@/components/Common/LoadingSpinner/LoadingSpinner';

function Repos() {
  
  let { repos, loading, error } = useGitFetch();

  if(error){
      return (<h1>{error}</h1>);
  }

  if(loading){
      return (<LoadingSpinner />);
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
