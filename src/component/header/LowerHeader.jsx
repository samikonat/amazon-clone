import React from "react";
import classes from "./Header.module.css";
import { IoMenuSharp } from "react-icons/io5";

const LowerHeader = () => {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <IoMenuSharp />
          <p>All</p>
        </li>
        <li>today's deals</li>
        <li>costumer service</li>
        <li>Registry</li>
        <li>Gift cards</li>
        <li>sell</li>
      </ul>
    </div>
  );
};

export default LowerHeader;
