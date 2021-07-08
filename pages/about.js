import Adminlogo from "../comp/adminlogo"


const About = ()=>{
    return (
        <div className="margin">
            <div>
            <div  className="text-center">
                <h1 ><b>About us</b></h1>
                <div className="text-secondary">Home &gt; about </div>
            </div>

         <div className="container" id="homepage-text">
          <div className="row mb-5 pb-4 margin">

            <div className="col-sm-4">    
                <div>
                    <Adminlogo />
                    </div>
                    <h4 className="font-weight-bold">Bill gates</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, beatae.</p>
            </div>

            <div className="col-sm-8">
               <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, sint.</h2>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo tenetur voluptate ad qui, beatae dolore delectus. Quae, minima! Ducimus, ab Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sed asperiores, blanditiis pariatur voluptas accusamus tempora repudiandae recusandae alias tenetur explicabo veritatis iure ipsum fuga ducimus aut, ea sunt ipsam!!</p>
               <h2 className="mt-1">how i work</h2>
               <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo tenetur voluptate ad qui, beatae dolore delectus. Quae, minima! Ducimus, ab Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sed asperiores, blanditiis pariatur voluptas accusamus tempora repudiandae recusandae alias tenetur explicabo veritatis iure ipsum fuga ducimus aut, ea sunt ipsam!!</div>
            </div>

          </div>
        </div> 
       </div>
    </div>
        
    )
}

export default About;

