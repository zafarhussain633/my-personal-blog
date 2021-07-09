import React, { useState, useEffect ,createContext } from "react";
import apidata from "./apidata";
import { BlogcontentRight } from "./blogcontent";
import Adminlogo from "./adminlogo";
import Forms from './forms';


export const Displaypagging = createContext();



function ArticlesData() {
  const [Artdata, setArtData] = useState(apidata);
  const [innerpageData, setInnerpageData] = useState(true);

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

  function handleInnerpage(){
    setInnerpageData(false)
  }

  //  <Displaypagging.Provider value= {innerpageData}>
  //       <Pagination />
  //  </Displaypagging.Provider>

  

  return (
    <>
      {innerpageData ? (
        Artdata?.map((v) => (
          <ArticlesCard
            handleClick={handleInnerpage}
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
            key={Artdata[0].id}
            blogImage={Artdata[0].blogImage}
            date={Artdata[0].date}
            title={Artdata[0].title}
            userName={Artdata[0].userName}
            userImage={Artdata[0].userImage}
            userDesignation={Artdata[0].userDesignation}
          />
          <InnerpageText />
        </>
      )}
    </>
  );
}

function InnerpageText() {
  return (
    <>
      <div className="container mt-5" id="homepage-text">
        <div className="row mb-5 pb-4">
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              tenetur voluptate ad qui, beatae dolore delectus. Quae, minima!
              Ducimus, ab Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Dolor sed asperiores, blanditiis pariatur voluptas accusamus
              tempora repudiandae recusandae alias tenetur explicabo veritatis
              iure ipsum fuga ducimus aut, ea sunt ipsam!!
            </p>
          </div>
          <h2 className="mt-4">
            <b>how it works</b>
          </h2>
          <p>
            Lorem ipsum dolor sit amet.lorem50 Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Iste ducimus facere nostrum veritatis
            quas excepturi reprehenderit eaque amet quia! Asperiores consequatur
            animi velit minus dicta. Pariatur odit aliquam sunt totam illo
            veritatis provident amet! Maxime vel perspiciatis animi atque
            commodi, aspernatur tenetur doloribus, enim culpa totam accusamus
            cumque natus ipsam.
          </p>
          <div>
            <b>On her way she met a copy. </b>
            <span>
              he copy warned the Little Blind Text, that where it came from it
              would have been rewritten a thousand times and everything that was
              left from its origin would be the word "and" and the Little Blind
              Text should turn around and return to its own, safe country. But
              nothing the copy said could convince her and so it didn’t take
              long until a few insidious Copy Writers ambushed her, made her
              drunk with Longe and Parole and dragged her into their agency,
              where they abused her for their.
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
            alt="na"
          />
        </a>

        <div className="mt-3">
          <p className="text-primary">
            <i className="m-1 far fa-calendar-alt"> Jul 12 2021 </i>
            <i className="m-1 fas fa-user"> admin </i>
            <i className="m-1 fas fa-comment"> 3 </i>
          </p>
          <h5 className="card-title" onClick={props.handleClick}>
            {" "}
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


