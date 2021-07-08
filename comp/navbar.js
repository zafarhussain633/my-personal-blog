import Link from "next/link"
import Head from 'next/head'

function Navbar() {
    return (
      <>
      <header>
        <Head>
        <title>simple next.js app by_zafar</title>
        <meta name="keyword" content="next.js"/>
         {/* bootstrap cdn*/}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
         {/* font awsome cdn */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        </Head>
      </header>

     <nav className="navbar navbar-expand-lg  fixed-top shadow-sm" id="nav-color">
        <div className="container-fluid" id="nav-menu">
         
            <div id="logo"><Link href="/"><a className="navbar-brand nav-link-color" aria-current="page" >Moose</a></Link></div>
            <div className="navbar-toggler nav-link" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span>Menu</span>
            </div>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

              <li className="nav-item m-2 ">
                <Link href="/"><a className="nav-link active nav-link-color" aria-current="page">home</a></Link>
              </li>

              <li className="nav-item m-2 ">
              <Link href="/articles"><a className="nav-link active nav-link-color" aria-current="page">Articles</a></Link>
              </li>

              <li className="nav-item m-2 ">
              <Link href="/about"><a className="nav-link active nav-link-color" aria-current="page">About</a></Link>
              </li>

              <li className="nav-item m-2">
              <Link href="/contact"><a className="nav-link active nav-link-color" aria-current="page">Contact</a></Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
      </> 
    
    )
}

export default Navbar
