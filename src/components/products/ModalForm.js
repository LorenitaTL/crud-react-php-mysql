import React from "react";
import ReactDOM from "react-dom";

export const ModalForm = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal">
            <section className="modal-main">
              <div className="title">
                <h2>New Product</h2>
              </div>
              <div className="content">
                <div className="add-img">
                  <i className="fas fa-file-image fa-5x"></i>
                </div>
                <div className="form-item">
                  <label>Name: </label>
                  <input type="text" />
                </div>
                <div className="form-item">
                  <label>Price: </label>
                  <input type="text" />
                </div>
                <div className="form-item">
                  <label>Category: </label>
                  <input type="text" />
                </div>
                <div className="form-item">
                  <label>Qty: </label>
                  <input type="text" />
                </div>
              </div>
              <div className="footer">
                <button id="cancel" onClick={hide}>
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
            </section>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
