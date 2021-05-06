import React from "react";
import { useDispatch } from "react-redux";
import { clearCategoryActive } from "../actions/categories";
import { uiOpenModal, uiShowForm } from "../actions/ui";

export const SearchBar = ({ addProduct, value, change }) => {
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch(uiOpenModal());
  };
  const showForm = () => {
    dispatch(clearCategoryActive());
    dispatch(uiShowForm());
  };
  return (
    <div className="search">
      <input type="text" placeholder="Search" value={value} onChange={change} />
      {addProduct ? (
        <button onClick={showModal}>
          <h2>
            <i className="fa fa-plus" aria-hidden="true"></i> Add product
          </h2>
        </button>
      ) : (
        <button onClick={showForm}>
          <h2>
            <i className="fa fa-plus" aria-hidden="true"></i> New Category
          </h2>
        </button>
      )}
    </div>
  );
};
