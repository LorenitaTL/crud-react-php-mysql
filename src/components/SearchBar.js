import React from "react";

export const SearchBar = ({ show, addProduct }) => {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      {addProduct ? (
        <button onClick={show}>
          <h2>
            <i class="fa fa-plus" aria-hidden="true"></i>Add product
          </h2>
        </button>
      ) : null}
    </div>
  );
};
