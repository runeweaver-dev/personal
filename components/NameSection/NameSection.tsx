import Link from 'next/link';
import styles from './NameSection.module.scss';

const linkStyles = {
    textDecoration: "none",
    color: "black"
}

function NameSection(){
    return (
        <div className={styles.NameSection}>
            <Link href="/" style={linkStyles}>
            Cameron Raw
            </Link>
            <div className={styles.colorLine}></div>
            <h2 className="role">Full-Stack Developer</h2>
        </div>
    );
}

export default NameSection;
