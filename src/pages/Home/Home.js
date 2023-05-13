import React from "react";
import { Link } from "react-router-dom";
import About from "../About";
import Cart from "../Cart/Cart";
import UseProducts from "../hooks/UseProducts";
import OverView from "../OverView/OverView";
import Banner from "./../Banner/Banner";
import NewProducts from "./Newproducts";
import Rateing from "./Rateing";

const Home = () => {
  const [product] = UseProducts();
  const sliceProducts = product.slice(0, 4);
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-center text-2xl font-bold mt-8 mb-10 ">
        {" "}
        Our Products
      </h2>
      <div className="inline grid gap-x-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {sliceProducts.map((product) => (
          <Cart key={product._id} product={product}></Cart>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/ProductsCart">
          <button className="btn btn-outline mt-10">See All</button>
        </Link>
      </div>

      <OverView></OverView>
      <NewProducts></NewProducts>
      <Rateing></Rateing>
      <About></About>
    </div>
  );
};

export default Home;
