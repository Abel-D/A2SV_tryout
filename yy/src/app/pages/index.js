import React from "react";
import Page from '../app/Page';
import Header from '../components/header';
import Footer from '../components/footer';
import Landing from '../components/landing';
// import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

export default function Home({ Component, pageProps }) {
    return ( 
        // <PrimeReactProvider>
            <Page >
                <div className='container flex flex-row'>
                    <div className='header '>
                        Header
                       <Header/>
                    </div>
                    <div className='landing'>
                        landing
                        <Landing/>
                    </div>
                    <div className='footer'>
                        footer
                        <Footer/>
                    </div>
                </div>
            </Page> 
        // </PrimeReactProvider>
        )
    }   