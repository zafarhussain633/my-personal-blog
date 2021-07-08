import Layout from '../comp/layout'
import '../styles/globals.css'
import '../styles/Navbar.css'

function MyApp({ Component, pageProps }) {
  return(
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
