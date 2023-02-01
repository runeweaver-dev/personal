import useGitFetch from '@/services/useGitFetch';
import Repo from '@/components/RepoBlock/Repo/Repo';
import styles from './Repos.module.scss';

function Repos() {
  
  let { repos, loading, error } = useGitFetch();

  if(error){
      return (<h1>{error}</h1>);
  }

  if(loading){
      return (<h1>Loading..</h1>);
  }

  return (
    <div className={styles.Repos}>
      <h2>Public Projects</h2>
      {repos.map((repo) => (
        <Repo repoData={repo} />
      ))}
    </div>
  )
}

export default Repos;
