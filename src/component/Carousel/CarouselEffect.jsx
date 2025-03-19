import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ImageData } from "./images/data.js";
import classes from "./carousel.module.css";

const CarouselEffect = () => {
  //   console.log(ImageData);
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
      >
        {ImageData.map((images, index) => (
          <img src={images} alt="" key={index} />
        ))}
      </Carousel>
      <div className={classes.hero__img}></div>
    </>
  );
};

export default CarouselEffect;
