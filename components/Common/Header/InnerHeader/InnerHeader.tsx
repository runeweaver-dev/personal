import Nav from '../Menu/Nav/Nav';
import styles from './InnerHeader.module.scss';

function InnerHeader(){
    return (
        <div className={styles.InnerHeader}>
            <div className={styles.role}>
                <h2>Full-Stack Developer</h2>
            </div>
            <Nav />
        </div>
    );
}

export default InnerHeader;
