import '../styles/globals.css'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module/dist/TagManager';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
