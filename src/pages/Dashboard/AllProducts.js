import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AllProducts = ({ data }) => {
  const { name, total, minimum, picture, price, _id } = data;
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const navigateToUpdate = (id) => {
    navigate(`/dashboard/manageProducts/${id}`);
  };
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete");
    if (confirm) {
      const url = `https://bioji-metal-server-shakib633.vercel.app/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const restProducts = products.filter((product) => product._id !== id);
          setProducts(restProducts);
          toast.info("Product Has been Remove from Inventory");
        });
    }
  };
  return (
    <tr>
      <th></th>
      <td>
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src={picture} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{total}</td>
      <td>{minimum}</td>
      <td>{price}</td>
      <td>
        <button className="btn btn-outline" onClick={() => handleDelete(_id)}>
          Delete
        </button>
      </td>
      <td>
        <button
          className="btn btn-outline"
          onClick={() => navigateToUpdate(_id)}
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default AllProducts;
