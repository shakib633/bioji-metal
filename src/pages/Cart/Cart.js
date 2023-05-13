import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./Cart.css";

const Cart = ({ product }) => {
  const { name, price, picture, origin, total, minimum, about, _id } = product;

  const navigate = useNavigate();
  const navigateToPurchase = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div className="p-5 card w-fit bg-base-100 rounded-lg shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
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

      <div className="card-actions justify-end">
        <button
          onClick={() => navigateToPurchase(_id)}
          className="btn btn-outline btn-success"
        >
          order
        </button>
      </div>
    </div>
  );
};

export default Cart;
