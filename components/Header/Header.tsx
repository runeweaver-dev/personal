import InnerHeader from '../InnerHeader/InnerHeader';
import NameSection from '../NameSection/NameSection';
import styles from './Header.module.scss';

function Header(){
    return (
        <div className={styles.Header}>
            <InnerHeader />
            <NameSection />
        </div>
    )
}

export default Header;
