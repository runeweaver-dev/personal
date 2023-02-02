import Intro from './Intro/Intro';
import styles from './Home.module.scss';
import BowmanBlob from './BowmanBlob/BowmanBlob';
import PublicProjects from '../RepoBlock/PublicProjects/PublicProjects';

function Home(){
    return (
        <div className={styles.Home}>
            <BowmanBlob />
            <Intro />
            <PublicProjects />
        </div>
    )
}

export default Home;
