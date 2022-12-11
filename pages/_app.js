import '../public/assets/css/animate.min.css'
import React, { useEffect, useState } from "react";
import '../public/assets/css/tailwind-built.css'
import Preloader from '../components/elements/Preloader';
import "swiper/css";
import TagManager from 'react-gtm-module';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(false);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-W6G85C9' });
    }, []);
    return (
        <>
            <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-6KEZ9KJ199"></script>
                    <script type="text/javascript"  src="https://apiv2.popupsmart.com/api/Bundle/394056" async></script>
                    <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/26494916.js"></script>
                
            </Head>
            {!loading ? (
                <Component {...pageProps} />
            ) : (
                <Preloader />
            )}
        </>
    )
}

export default MyApp
