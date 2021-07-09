import React,{useState,useEffect}from 'react'
import {BlogcontentRight,BlogcontentLeft} from '../../comp/blogcontent'
import apidata from '../../comp/apidata';

function BlogData() {
    const [bldata, setblData] = useState(null);
  
    useEffect(() => {
      fetch('https://strapi-atlas-blog.herokuapp.com/blogs')
        .then((res) => res.json())
        .then((v) => {
          setblData(v);
        })
        .catch((err) => {
         if(err){
           setblData(apidata);
         }
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





export default BlogData;