import { AppProps } from 'next/app';
import HeadData from '../components/Common/HeadData/HeadData';
import Header from '../components/Common/Header/Header';
import '../styles/index.scss';
import styles from './App.module.scss';
import { Roboto } from '@next/font/google';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '300', '500']
});

const mainStyles = {
    height: "100%"
}

function App({ Component, pageProps }: AppProps) {
    return (
        <main className={`${roboto.className}`} style={mainStyles}>
            <HeadData /><div className={styles.App}>
                <Header />
                <div className={styles.bodyContainer}>
                    <Component {...pageProps} />
                </div>
            </div>
        </main>
    );

}

export default App;
