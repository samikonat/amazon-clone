import React from "react";
import classes from "./category.module.css";
import { categoryInfos } from "./categoryData";
import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <div className={classes.category_container}>
      {categoryInfos.map((category, index) => (
        <CategoryCard key={index} item={category} />
      ))}
    </div>
  );
};

export default Category;
