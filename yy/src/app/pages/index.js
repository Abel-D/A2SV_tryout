import Page from '../app/Page';
import Header from '../components/header';
import Footer from '../components/footer';
import Landing from '../components/landing';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

export default function Home({ Component, pageProps }) {
    return ( 
        <PrimeReactProvider>
            <Page >
                <Component {...pageProps }/>
            </Page> 
        </PrimeReactProvider>
        )
    }   