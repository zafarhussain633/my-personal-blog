import React from 'react'

function Contact() {
    return (
        <div  className="container margin" id="homepage-text">
            <div  className="text-center my-5">
                <h1 ><b>Conatct</b></h1>
                <div className="text-secondary">HOME &gt; CONTACT </div>
            </div>

         {/* //for addres phone email wesite link  */}
         <div className="row mx-5">    
             <div className="col-sm-3 text-center mt-5 ">
                <div className="">
                <i className="fas fa-map-marker-alt p-4 iconbgColor rounded-circle text-light"></i>
                </div>
                <div>
                  <h3>Address</h3>
                  <p>Lorem ipsum dolor sit amet 254000.</p>
                </div>
             </div>

             <div className="col-sm-3 text-center  mt-5">
                <div className="">
                <i class="fas fa-phone p-4 iconbgColor rounded-circle text-light"></i>
                </div>
                <div>
                  <h3>Phone</h3>
                  <i className="text-primary">+91 987654310</i>
                </div>
             </div>

             <div className="col-sm-3 text-center  mt-5">
                <div className="">
                <i class="fas fa-paper-plane p-4 iconbgColor rounded-circle text-light"></i>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>Lorem ipsum dolor sit amet 254000.</p>
                </div>
             </div>

             <div className="col-sm-3 text-center  mt-5">
                <div className="">
                <i class="fas fa-globe-asia p-4 iconbgColor rounded-circle text-light"></i>
                </div>
                <div>
                  <h3>Website</h3>
                  <a href="#">myblog.com</a>
                </div>
             </div>

         </div>

        </div>
    )
}

export default Contact




