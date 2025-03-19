import React from "react";
import Carousel from "../../component/Carousel/CarouselEffect";
import Catagory from "../../component/category/Category";
import Product from "../../component/Product/Product";
import LayOut from "../../component/LayOut/LayOut";
function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Catagory />
      <Product />
    </LayOut>
  );
}

export default Landing;
