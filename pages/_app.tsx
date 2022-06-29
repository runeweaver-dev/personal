import { AppProps } from 'next/app';
import Header from '../components/Header/Header';
import '../styles/index.scss';
import styles from './App.module.scss';

function App({ Component, pageProps } : AppProps) {
    return (
        <div className={styles.App}>
            <Header />
            <div className={styles.bodyContainer}>
                <Component {...pageProps} />
            </div>
        </div>
    );

}

export default App;
