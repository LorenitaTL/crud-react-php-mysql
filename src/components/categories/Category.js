import React from "react";

export const Category = () => {
  return (
    <div className="category">
      <img
        src={
          "https://www.consultancy.uk/illustrations/news/spotlight/2019-09-26-084805645-Five-top-trends-impacting-the-food-and-beverage-industries.spot.jpg"
        }
        alt=""
      />
      <h3>Name</h3>
      <p>Description</p>
      <div className="options">
        <button id="edit">
          <i className="fas fa-edit fa-2x"></i>
        </button>
        <button id="delete">
          <i class="fa fa-trash fa-2x" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
