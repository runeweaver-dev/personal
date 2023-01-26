import Image from 'next/image';
import styles from './Intro.module.scss';

function Intro() {
    return (
        <div className={styles.Intro}>
            <h2>Intro</h2>
            <div className={styles.introCard}>
                <div className={styles.introText}>
                    <h1>Hi, I'm Cameron</h1>
                    <p>I'm a fullstack developer, currently based in Barcelona, Spain. </p>
                </div>
                <div className={styles.imageContainer}>
                    <Image className={styles.profileImage} src="/img/solsiden.jpeg" height={300} width={300} alt={'A picture of Cameron Raw, a full-stack Web Developer.'} />
                </div>
            </div>
        </div>
    )
}

export default Intro;
