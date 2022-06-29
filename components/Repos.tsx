import useGitFetch from '../services/useGitFetch';
import Repo from './Repo';
import '../styles/Repos.scss';

function Repos(){
  
  let { repos, loading, error } = useGitFetch();

  if(error){
      return (<h1>Repos could not be loaded</h1>);
  }

  if(loading){
      return (<h1>Loading..</h1>);
  }

  return (
    <div className="Repos">
      <h2>Projects</h2>
      {repos.map((repo) => (
        <Repo repoData={repo} />
      ))}
    </div>
  )
}

export default Repos;