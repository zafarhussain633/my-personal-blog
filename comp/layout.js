
import Navbar from './navbar'
import Footer from './footer'
import Newslettercomp from './newslettercomp'

function Layout({children}) {
    return (
        <div className="content">
        <Navbar />
        { children }
        <Newslettercomp />
        <Footer /> 
        </div>
    )
}
export default Layout
