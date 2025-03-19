import React, { useState } from "react";
import LayOut from "../../component/LayOut/LayOut";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { commonUrl } from "../../api/endPoint";
import ProductCard from "../../component/Product/ProductCard";
import style from "./Results.module.css";
import Loader from "../../component/Loader/Loader";
function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryName } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${commonUrl}/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <LayOut>
      <div>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={style.products_container}>
            {results?.map((sinleproduct) => {
              return (
                <ProductCard
                  key={sinleproduct.id}
                  data={sinleproduct}
                  renderAdd={true}
                />
              );
            })}
          </div>
        )}
      </div>
    </LayOut>
  );
}

export default Results;
