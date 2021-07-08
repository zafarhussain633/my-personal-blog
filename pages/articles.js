import { ArticlesData } from "./strapiApi/data";

const Articles = ()=>{
    return (
        <div className="margin">
         <div  className="text-center my-5">
             <h1 ><b>Our Blog</b></h1>
             <div className="text-secondary">Home &gt; blog </div>
         </div>

         <div className="conatiner d-flex flex-wrap justify-content-center">
             <ArticlesData />  
        </div>

   {/* for paganination */}
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

        </div>
        
        
    )
}

export default Articles;

