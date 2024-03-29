import React from "react";
import { useState, useEffect } from "react";

const UseProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return [products, setProducts];
};

export default UseProducts;
