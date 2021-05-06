import React from "react";
import { useDispatch } from "react-redux";
import { categoryActive } from "../../actions/categories";
import { uiShowForm } from "../../actions/ui";

export const Category = ({ category }) => {
  const dispatch = useDispatch();

  const setActiveCategory = (c) => {
    dispatch(categoryActive(c));
    dispatch(uiShowForm());
  };
  return (
    <div className="category">
      <img
        onError={(e) => {
          e.target.onerror = null;
          e.target.src =
            "https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png";
        }}
        src={`${process.env.REACT_APP_API_URL}${category.photo}`}
        alt=""
      />
      <h3>{category.name}</h3>
      <p>{category.description}</p>
      <div className="options">
        <button id="edit" onClick={() => setActiveCategory(category)}>
          <i className="fas fa-edit fa-2x"></i>
        </button>
      </div>
    </div>
  );
};
