import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LayOut from "../../component/LayOut/LayOut";
import axios from "axios";
import {commonUrl } from "../../api/endPoint";
import ProductCard from "../../component/Product/ProductCard";
import Loader from "../../component/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  // console.log(productId)

  const [product, SetProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${commonUrl}/${productId}`)
      .then((res) => {
        // console.log(res)
        SetProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);
  // console.log(product)

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          data={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
