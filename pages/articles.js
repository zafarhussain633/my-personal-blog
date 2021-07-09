import ArticlesData from "../comp/articlescard";
import Pagination from "../comp/pagination";


const Articles = ()=>{


   

    return (
        <div className="margin" >
         <div  className="text-center my-5">
             <h1 ><b>Our Blog</b></h1>
             <div className="text-secondary">Home &gt; blog </div>
         </div>

         <div className="conatiner d-flex flex-wrap justify-content-center">
            
            <ArticlesData/> 
        
        </div>

       <Pagination />
       
    
        </div>
        
        
    )
}

export default Articles;

