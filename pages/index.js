import MainPage from '../comp/home'
import Adminlogo from '../comp/adminlogo';

function Home() {
  return (
    <> 
        <div className="container" id="homepage-text">
          <div className="text-center" id="big-text">M<span>oo</span>se</div>
          <div className="row mb-5 pb-4">

            <div className="col-sm-8">
               <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, sint.</h2>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo tenetur voluptate ad qui, beatae dolore delectus. Quae, minima! Ducimus, ab Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sed asperiores, blanditiis pariatur voluptas accusamus tempora repudiandae recusandae alias tenetur explicabo veritatis iure ipsum fuga ducimus aut, ea sunt ipsam!!</p>
            </div>

            <div className="col-sm-4">
             <Adminlogo />
              <h4 className="font-weight-bold">Bill gates</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, beatae.</p>
            </div>
          </div>

        </div>
         
        <div>
          <MainPage />
        </div>
    </>
  )
}

export default Home;



