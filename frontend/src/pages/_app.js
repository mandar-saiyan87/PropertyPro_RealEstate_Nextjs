import '@/styles/globals.css'
import Navbar from '@/components/Navbar'

import { Poppins } from 'next/font/google'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )

}
