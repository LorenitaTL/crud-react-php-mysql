import React from "react";

export const Form = () => {
  return (
    <div className="form">
      <div className="title">
        <h2>New Category</h2>
      </div>
      <div className="content">
        <div className="add-img">
          <i className="fas fa-file-image fa-5x"></i>
        </div>
        <div>
          <label>Name:</label>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <label>Description:</label>
          <div>
            <textarea rows={5} type="text" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button id="cancel">
          <h2>
            <i className="fa fa-times" aria-hidden="true"></i> Cancel
          </h2>
        </button>
        <button id="save">
          <h2>
            <i className="fa fa-check" aria-hidden="true"></i> Save
          </h2>
        </button>
      </div>
    </div>
  );
};
