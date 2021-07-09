import React from 'react'

function Forms() {
    return (
        <>
             <form className="shadow mt-2">
          <div className="p-4">
            <div className="row">
              <div className="col-sm">
                <label for="firstname" className="p-1 mt-3 dateColor">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  placeholder="First name"
                />
              </div>

              <div className="col-sm">
                <label for="email" className="p-1 mt-3  dateColor">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="col">
              <label for="website" className="p-1 mt-3  dateColor">
                Website
              </label>
              <input
                type="text"
                className="form-control"
                id="website"
                name="website"
                placeholder="website"
              />
            </div>

            <div className="col">
              <label for="text-area" className="p-1 mt-3  dateColor">
                Message
              </label>
              <textarea
                className="form-control"
                id="text-area"
                rows="8"
                style={{ resize: "none" }}
              ></textarea>
            </div>
            <button className="btn iconbgColor mt-3 text-white p-2">POST COMMENT</button>
          </div>
        </form>
        </>
    )
}

export default Forms
