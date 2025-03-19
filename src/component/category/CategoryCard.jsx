import React from "react";
import classes from "./category.module.css";

const CategoryCard = ({ item }) => {
  return (
    <div className={classes.category}>
      <a href="#">
        <span>
          <h2>{item.name}</h2>
        </span>
        <img src={item.imgLink} alt="" />
        <p>Shop now</p>
      </a>
    </div>
  );
};

export default CategoryCard;
