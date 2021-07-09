import React from 'react'
import { Displaypagging } from './articlescard'

function Pagination() {
    return (
        <>
           <Displaypagging.Consumer>
               {
                   state=> <PaginationButton />
               }
           </Displaypagging.Consumer>
        </>
    )
}



function PaginationButton(){
    return(
          <div className="d-flex justify-content-center mb-5 mt-5"> 
             <div aria-label="Page navigation example">
                 <ul className="pagination">
                     <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                     <li className="page-item"><a className="page-link" href="#">1</a></li>
                     <li className="page-item"><a className="page-link" href="#">2</a></li>
                     <li className="page-item"><a className="page-link" href="#">3</a></li>
                     <li className="page-item"><a className="page-link" href="#">Next</a></li>
                 </ul>
              </div>
           </div>
    )
}




export default Pagination
