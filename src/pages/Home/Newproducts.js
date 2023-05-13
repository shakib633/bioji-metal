import React from "react";
import UseProducts from "../hooks/UseProducts";
import Products from "./Produtcs";

const NewProducts = () => {
  const [parts, setParts] = UseProducts();
  const sliceParts = parts.slice(5, 50);
  return (
    <div className="">
      <h2 className="font-bold text-4xl text-center mt-10">New produts</h2>
      <div className="inline grid gap-x-9	sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sliceParts.map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </div>
    </div>
  );
};

export default NewProducts;
