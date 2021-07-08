import React from "react";

function BlogcontentRight(props) {
  return (
    //  <p>{props.date}</p>
    //  <h2>{props.title}</h2>
    //  <div><b>{props.userName}</b></div>
    // <img src={`${props.userImage}`} alt="na" width="150px" />
    //  <p>{props.userDesignation}</p>

    <div className="container-fluid mt-2" id={props.id}>
      <div className="row">
        <div className="col-sm">
          <img className="img-fluid" src={`${props.blogImage}`} alt="na" />
        </div>

        <div className="col-sm d-flex align-items-center">
          <div>
            <div>
              <p>
                <i className="m-1 far fa-calendar-alt"> Jul 12 2021 </i>
                <i className="m-1 fas fa-user"> admin </i>
                <i className="m-1 fas fa-comment"> 3 </i>
              </p>
              <h1>
                <b>{props.title}</b>
              </h1>
            </div>

            <div className="d-flex">
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
    </div>
  );
}


function BlogcontentLeft(props) {
    return (
      //  <p>{props.date}</p>
      //  <h2>{props.title}</h2>
      //  <div><b>{props.userName}</b></div>
      // <img src={`${props.userImage}`} alt="na" width="150px" />
      //  <p>{props.userDesignation}</p>
  
      <div className="container-fluid mt-2 bg-dark text-light" id={props.id}>
        <div className="row">
          <div className="col-sm p-4 d-flex align-items-center">
            <div>
              <div>
                <p className="text-primary">
                    <i className="m-1 far fa-calendar-alt"> Jul 12 2021 </i>
                    <i className="m-1 fas fa-user"> admin </i>
                    <i className="m-1 fas fa-comment"> 3 </i>
                </p>
                <h1 className="text-light">
                  <b>{props.title}</b>
                </h1>
              </div>
  
              <div className="d-flex">
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
                  <p className="text-primary">{props.userDesignation}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <img className="img-fluid" src={`${props.blogImage}`} alt="na" />
          </div>


        </div>
      </div>
    );
  }





  
  
  

export {BlogcontentRight , BlogcontentLeft};
