import '../styles/globals.css'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module/dist/TagManager';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-TSCX4V5D'
    };

    TagManager.initialize(tagManagerArgs);
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
