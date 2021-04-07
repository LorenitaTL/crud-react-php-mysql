import React from "react";

export const Product = () => {
  return (
    <div className="product">
      <div className="small">
        <p>123</p>
      </div>
      <div className="big">
        <p>Product number 1</p>
      </div>
      <div className="small">
        <p>$200</p>
      </div>
      <div className="small">
        <p>Food</p>
      </div>
      <div className="small">
        <p>5</p>
      </div>
      <div className="small">
        <div className="actions">
          <button>
            <h3>
              Edit <i className="fas fa-edit fa-2x"></i>
            </h3>
          </button>
          <button>
            <h3>
              Delete <i className="fa fa-trash fa-2x" aria-hidden="true"></i>
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
};
