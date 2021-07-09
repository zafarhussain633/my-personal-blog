import React, { useState, useEffect ,createContext } from "react";
import apidata from "./apidata";
import { BlogcontentRight } from "./blogcontent";
import Adminlogo from "./adminlogo";
import Forms from './forms';


export const Displaypagging = createContext();



function ArticlesData() {
  const [Artdata, setArtData] = useState(apidata);
  const [innerpageData, setInnerpageData] = useState(true);
  const [innerpageId, setInnerpageId] = useState(Number());

  useEffect(() => {
    fetch("https://strapi-atlas-blog.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((v) => {
        setArtData(v);
      })
      .catch((err) => {
        if (err) {
          setArtData(apidata);
        }
      });
  }, []);

  function handleInnerpage(e){
    setInnerpageData(false)
    setInnerpageId(e.target.alt)
  }

  //  <Displaypagging.Provider value= {innerpageData}>
  //       <Pagination />
  //  </Displaypagging.Provider>

  

  return (
    <>
      {innerpageData ? (
        Artdata?.map((v) => (
          <ArticlesCard
            handleClick={(e)=>handleInnerpage(e)}
            value={v.id}
            key={v.id}
            blogImage={v.blogImage}
            date={v.date}
            title={v.title}
            userName={v.userName}
            userImage={v.userImage}
            userDesignation={v.userDesignation}
          />
          
        ))
      ) : (
        <>
          <BlogcontentRight
            key={Artdata[innerpageId].id}
            blogImage={Artdata[innerpageId].blogImage}
            date={Artdata[innerpageId].date}
            title={Artdata[innerpageId].title}
            userName={Artdata[innerpageId].userName}
            userImage={Artdata[innerpageId].userImage}
            userDesignation={Artdata[innerpageId].userDesignation}
          />
          <InnerpageText
          text={Artdata[innerpageId].text}
          howItWorksText = {Artdata[innerpageId].howItWorksText}
           />
        </>
      )}
    </>
  );
}

function InnerpageText(props) {
  return (
    <>
      <div className="container mt-5" id="homepage-text">
        <div className="row mb-5 pb-4">
          <div>
            <p>{props.text}</p>
          </div>
          <h2 className="mt-4">
            <b>how it works</b>
          </h2>
          <p>{props.howItWorksText}</p>
          <div>
            <b>On her way she met a copy. </b>
            <span>
             {props.text}
            </span>
          </div>
          <div className="mt-4 mb-4">
            <a
              href="#"
              type="button"
              className="btn iconbgColor text-white pt-1 pb-1 m-2"
            >
              Life
            </a>
            <a
              href="#"
              type="button"
              className="btn iconbgColor text-white pt-1 pb-1 m-2 m-2"
            >
              Sports
            </a>
            <a
              href="#"
              type="button"
              className="btn iconbgColor text-white pt-1 pb-1 m-2 m-2"
            >
              Tech
            </a>
            <a
              href="#"
              type="button"
              className="btn iconbgColor text-white pt-1 pb-1 m-2 m-2"
            >
              Work
            </a>
          </div>

          <h3 className="mt-5">
            <b>6 Comments</b>
          </h3>
          <div className="row mb-5 p-2">
            <div className="col-sm-2 text-center">
              <Adminlogo />
            </div>

            <div className="col-sm-10">
              <h4 className="font-weight-bold">Bill gates</h4>
              <p className="dateColor">SEPTEMBER 28, 2020 AT 3:03PM</p>
              <p>
                Lorem ip ipsum dolor sit amet consectetur adipisicing elit.
                Eius, beatae Lorem, ip sum dolor sit amet consectetur
                adipisicing elit. Eius, beatae Lorem, ipsum.lorem20
              </p>
            </div>
          </div>

          <div className="row mb-3 p-2">
            <div className="col-sm-2 text-center">
              <Adminlogo />
            </div>
            <div className="col-sm-10">
              <h4 className="font-weight-bold">Bill gates</h4>
              <p className="dateColor">SEPTEMBER 30, 2020 AT 3:03PM</p>
              <p>
                Lorem ip ipsum dolor sit amet consectetur adipisicing elit.
                Eius, beatae Lorem, ip sum dolor sit amet consectetur
                adipisicing elit. Eius, beatae Lorem, ipsum.lorem20
              </p>
            </div>
          </div>
        </div>
        <h2>Leave Comment</h2>

       <Forms />

      </div>
    </>
  );
}

function ArticlesCard(props) {
  return (
    <div className="m-5">
      <div style={{ width: "20rem" }}>
        <a onClick={props.handleClick}>
          <img
            className=" card-img-top"
            src={`${props.blogImage}`}
            height="320"
            width="400"
            alt={props.value}
          />
        </a>

        <div className="mt-3">
          <p className="text-primary">
            <i className="m-1 far fa-calendar-alt"> Jul 12 2021 </i>
            <i className="m-1 fas fa-user"> admin </i>
            <i className="m-1 fas fa-comment"> 3 </i>
          </p>
          <h5 className="card-title" onClick={props.handleClick}>
            <b>{props.title}</b>
          </h5>
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
  );
}




export default ArticlesData;


