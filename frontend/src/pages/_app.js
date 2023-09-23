import '@/styles/globals.css'
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import Navbar from '@/components/Navbar'



export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PropertyPro - Rent, Sell, Buy Properties</title>
        <meta name="description" content="Rent, Sell, Buy Properties" />
      </Head>
      <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      </Provider>
    </>
  )

}
