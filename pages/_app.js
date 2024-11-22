import Footer from '@components/Footer'
import Header from '@components/Header'
import '@styles/globals.css'

function Application({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
    )
}

export default Application
