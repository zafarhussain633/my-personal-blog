
import Link from "next/link"
import Image from "next/image"

const logo = "https://miro.medium.com/max/650/1*Hva7hcsFWulFUPhrEWui1A.jpeg"
function Navbar() {
    return (
        <nav>
            <div className="logo">
              <Image src="/logo.jpeg" width={200} height={120}/>  
            </div>
               
               
                <Link href="/"><a>home</a></Link>
                <Link href="/about"><a>about</a></Link>
                <Link href="/contact"><a>contact</a></Link>

        </nav>
    )
}

export default Navbar
