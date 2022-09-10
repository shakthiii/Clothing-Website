import React from "react";
import CategoriesItem from "../Categories-item/Categories-Item.component";
import categories from "./Category.json";
import "./categories.style.scss";

function Categories() {
  return (
    <div className="Categories">
      {categories.map(({ title, id, imageUrl }) => (
        <CategoriesItem categoryName={title} imageUrl={imageUrl} key={id} />
      ))}
    </div>
  );
}

export default Categories;
