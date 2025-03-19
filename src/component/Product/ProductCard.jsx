import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import Rating from "@mui/material/Rating";
import classes from "./product.module.css";
import { DataContext } from "../DataProvider/DataProvide";
import { Type } from "../../Utility/action.type";
const ProductCard = ({ data, flex, renderDesc, renderAdd }) => {
  //   console.log(data);

  const { image, title, name, price, id, rating, description } = data;
  const [{ basket }, dispatch] = useContext(DataContext);

  const addToCart = () => {
    console.log("clicked and basket is below", basket);
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: { image, title, name, price, id, rating, description },
    });
  };
  return (
    <div
      className={`${classes.card_container} ${flex && classes.product_flexed}`}
    >
      <a href="/">
        <img src={image} alt="" />
      </a>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "600px" }}>{description}</div>}
        <div className={classes.rating}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          <small>{rating?.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button} onClick={addToCart}>
          add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
