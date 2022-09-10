import React from "react";
import "./categories.style.scss";

function CategoriesItem({ categoryName, imageUrl, id }) {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="Card-body-container">
        <h2>{categoryName}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoriesItem;
