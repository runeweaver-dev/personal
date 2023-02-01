import Link from 'next/link';
import styles from './NameSection.module.scss';
import { Montserrat } from '@next/font/google';
import BowmanBlob from '@/components/Home/BowmanBlob/BowmanBlob';

const montserrat = Montserrat({
    subsets: ['latin']
});

function NameSection(){
    return (
        <div className={`${styles.NameSection} ${montserrat.className}`}>
            <div className={styles.bowmanBlob}>
                <BowmanBlob />
            </div>
            <Link href="/">
            Cameron Raw
            </Link>
            <div className={styles.colorLine}></div>
            <h2 className="role">Full-Stack Developer</h2>
        </div>
    );
}

export default NameSection;
