import React,{useState,useEffect}from 'react'
import {BlogcontentRight,BlogcontentLeft,ArticlesCard} from '../../comp/blogcontent'


function BlogData() {
    const [bldata, setblData] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:1337/Posts')
        .then((res) => res.json())
        .then((v) => {
          setblData(v);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    return (
        <>
         {
             bldata?.map(v=>(
                (!v.right)? 
                <BlogcontentRight
                key={v.id}
                blogImage ={v.blogImage}
                date={v.date}
                title={v.title}
                userName={v.userName}
                userImage ={v.userImage}
                userDesignation = {v.userDesignation}
               />:<BlogcontentLeft
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



  function ArticlesData() {
    const [Artdata, setArtData] = useState(null);
  
    useEffect(() => {
      fetch('http://localhost:1337/Posts')
        .then((res) => res.json())
        .then((v) => {
          setArtData(v);
        })
        .catch((err) => {
          console.log(err);
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




  export {BlogData,ArticlesData};