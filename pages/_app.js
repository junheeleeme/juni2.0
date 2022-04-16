import '../styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"/>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
