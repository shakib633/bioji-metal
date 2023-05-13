import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./ProductsCart.css";

const ProductsCart = ({ product }) => {
  const { name, price, picture, origin, total, minimum, about, _id } = product;

  const navigate = useNavigate();
  const navigateToPurchase = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="card w-fit text-left bg-base-100 rounded-lg shadow-xl">
      <div className="flex justify-center">
        <img style={{ width: "200px" }} src={picture} alt=""></img>
      </div>
      <div>
        <p className="text-xl font-bold	">{name}</p>
        <p>{about}</p>
        <p className="text-left m-2"> Origin: {origin}</p>
        <p className="text-left m-2">
          {" "}
          Available :{total}
          Pcs
        </p>
        <p className="text-left m-2">MOQ : {minimum}</p>
        <p className="text-left m-2"> price: {price}</p>
      </div>
      <button
        onClick={() => navigateToPurchase(_id)}
        className="btn btn-outline"
      >
        Order
      </button>
    </div>
  );
};

export default ProductsCart;
