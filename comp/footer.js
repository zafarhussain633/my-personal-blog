import React from 'react'
import Link from "next/link"

function Footer() {
    return (
        <footer className="bg-dark text-light">
            <div className="row p-5" id="footer">

                <div className="col-sm-4 mt-4">
                    <h3 className="text-light">Moose</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, sint!</p>
                    <div>
                        <i className="p-3 iconbgColor rounded-circle text-light fab fa-twitter"></i>
                        <i className="p-3 mx-1 iconbgColor  rounded-circle text-light fab fa-facebook"></i>
                        <i className="p-3 mx-1 iconbgColor  rounded-circle text-light fab fa-instagram"></i>
                    </div>
                </div>

                 <div className="col-sm-4 d-sm-flex justify-content-center text-sm-left mt-4">
                     <div>
                        <h3 className="mx-3 text-light">info</h3>
                        <Link href="/"><a className="text-light nav-link active nav-link-color" aria-current="page">&gt; home</a></Link>
                        <Link href="/about"><a className="text-light nav-link active nav-link-color" aria-current="page">&gt; About</a></Link>
                        <Link href="/articles"><a className="text-light nav-link active nav-link-color" aria-current="page">&gt; Articles</a></Link>
                        <Link href="/contact"><a className="text-light nav-link active nav-link-color" aria-current="page">&gt; Contact</a></Link>
                     </div>
                     
                </div>

                 <div className="col-sm-4 mt-4">
                    <h3 className="text-light">Have a Question ?</h3>
                    <div><i className="fas fa-map-marker-alt p-4" style={{color:"#588da8"}}></i> new york,USA</div>
                    <div><i className="fas fa-phone p-4  " style={{color:"#588da8"}}></i> +96 987654321</div>
                    <div><i className="fas fa-paper-plane p-4" style={{color:"#588da8"}}></i> example@gmail.com</div>
                </div>
            </div>

           <div className="text-secondary">Copyright ©2021 All rights reserved | This template is made with  by Colorlib</div>
           
        </footer>
    )
}

export default Footer
