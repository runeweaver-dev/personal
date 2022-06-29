import Intro from './Intro';
import '../styles/Home.scss';
import Repos from './Repos';

function Home(){
    return (
        <div className="Page Home">
            <Intro />
            <Repos />
        </div>
    )
}

export default Home;
