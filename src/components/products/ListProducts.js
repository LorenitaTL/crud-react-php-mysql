import React from "react";

import { Product } from "./Product";

export const ListProducts = () => {
  return (
    <div className="list-products">
      <div className="head">
        <div className="small">
          <h3>Code</h3>
        </div>
        <div className="big">
          <h3>Name</h3>
        </div>
        <div className="small">
          <h3>Price</h3>
        </div>
        <div className="small">
          <h3>Category</h3>
        </div>
        <div className="small">
          <h3>Qty</h3>
        </div>
        <div className="small">
          <h3>Actions</h3>
        </div>
      </div>
      <div className="content">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};
