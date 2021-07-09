import React, { useState , useEffect } from 'react'
import apidata from './apidata';
  function ArticlesData() {
    const [Artdata, setArtData] = useState(null);
  
    useEffect(() => {
      fetch('https://strapi-atlas-blog.herokuapp.com/blogs')
        .then((res) => res.json())
        .then((v) => {
          setArtData(v);
        })
        .catch((err) => {
          if(err){
            setArtData(apidata);
          }
        });
    }, []);
  
    return (
        <>
         {
             Artdata?.map(v=>( 
                <ArticlesCard
                key={v.id}
                blogImage ={v.blogImage}
                date={v.date}
                title={v.title}
                userName={v.userName}
                userImage ={v.userImage}
                userDesignation = {v.userDesignation}
                 />
             )
             )    
              
         }
         
        </>
    
    );
  }


  
  function ArticlesCard(props) {
    return (
 <div className="m-5">
      <div style={{width: '20rem'}}>
      <img className=" card-img-top" src={`${props.blogImage}`} height ="320" width="400" alt="na" />
      <div className="mt-3">
          <p className="text-primary">
              <i className="m-1 far fa-calendar-alt"> Jul 12 2021 </i>
              <i className="m-1 fas fa-user"> admin </i>
              <i className="m-1 fas fa-comment"> 3 </i>
          </p>
          <h5 className="card-title"> <b>{props.title}</b></h5>
          <div className="d-flex mt-3 mb-2">
              <div>
               <img
                 className="rounded-circle"
                 src={`${props.userImage}`}
                 alt="na"
                 width="60px"
               />
             </div>

             <div className="px-3">
               <div>
                 <b>{props.userName}</b>
               </div>
                <p>{props.userDesignation}</p>
              </div>
            </div>
      </div>
       </div>
 </div>

    )
}

  export default ArticlesData;
