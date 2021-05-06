import React from "react";
import { useDispatch } from "react-redux";
import swal from "sweetalert";
import {
  clearProductActive,
  productActive,
  productStartDelete,
} from "../../actions/products";
import { uiOpenModal } from "../../actions/ui";

export const Product = ({ product }) => {
  const dispatch = useDispatch();

  const setProductActive = (p, e) => {
    dispatch(productActive(p));
    e === "edit" ? dispatch(uiOpenModal()) : deleteProduct(p.code);
  };

  const deleteProduct = (code) => {
    swal({
      title: "Delete Product",
      text: "Are you sure to delete this item?",
      icon: "warning",
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(productStartDelete(code));
        dispatch(clearProductActive());
      }
    });
  };
  return (
    <div className="product">
      <div className="small">
        <p>{product.code}</p>
      </div>
      <div className="big">
        <p>{product.name}</p>
      </div>
      <div className="small">
        <p>${product.price}</p>
      </div>
      <div className="small">
        <p>{product.category}</p>
      </div>
      <div className="small">
        <p>{product.quantity}</p>
      </div>
      <div className="small">
        <div className="actions">
          <button onClick={() => setProductActive(product, "edit")}>
            <h3>
              Edit <i className="fas fa-edit fa-2x"></i>
            </h3>
          </button>
          <button onClick={() => setProductActive(product, "delete")}>
            <h3>
              Delete <i className="fa fa-trash fa-2x" aria-hidden="true"></i>
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
};
