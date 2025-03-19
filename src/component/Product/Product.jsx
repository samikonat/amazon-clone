import React from "react";
import { commonUrl } from "../../api/endPoint";
import { useEffect, useState } from "react";
import axios from "axios";
import classes from "./product.module.css";
import ProductCard from "./ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    axios
      .get(commonUrl)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={classes.product_container}>
      {products?.map((ProductData, index) => (
        <ProductCard key={index} data={ProductData} />
      ))}
    </div>
  );
};

export default Product;
