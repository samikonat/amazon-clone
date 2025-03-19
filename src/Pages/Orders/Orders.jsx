/* eslint-disable no-unused-vars */
// import React from 'react'
import { db } from "../../Utility/firebase";
import { DataContext } from "../../component/DataProvider/DataProvide";
import { useEffect, useContext, useState } from "react";
import Layout from "../../component/LayOut/LayOut";
import classes from "./orders.module.css";
import ProductCard from "../../component/Product/ProductCard";

const Orders = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>
          <div style={{ padding: "20px" }}>
            {orders?.length === 0 && <p>you don&apos;t have Orders yet</p>}
          </div>
          {/* ordered items */}
          <div>
            {orders?.map((eachOrders, index) => (
              <div key={index}>
                <hr />
                <p>Order ID: {eachOrders?.id}</p>
                {eachOrders?.data?.basket?.map((item, index) => (
                  <ProductCard key={index} flex={true} data={item} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Orders;
