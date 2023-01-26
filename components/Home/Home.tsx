import Intro from './Intro/Intro';
import Repos from '../RepoBlock/Repos/Repos';

import styles from './Home.module.scss';
import BowmanBlob from './BowmanBlob/BowmanBlob';

function Home(){
    return (
        <div className={styles.Home}>
            <BowmanBlob />
            <Intro />
            <Repos />
        </div>
    )
}

export default Home;
