import Page from '../app/Page';
import Header from '../components/header';
import Footer from '../components/footer';
import Landing from '../components/landing';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

export default function Home({ Component, pageProps }) {
    return ( 
        <PrimeReactProvider>
            <Page >
                <div className='container flex flex-row'>
                    <div className='header '>
                       <Header/>
                    </div>
                    <div className='landing'>
                        <Landing/>
                    </div>
                    <div className='footer'>
                        <Footer/>
                    </div>
                </div>
            </Page> 
        </PrimeReactProvider>
        )
    }   