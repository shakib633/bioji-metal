import React, { useEffect, useState } from "react";
import Order from "./Order";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  return (
    <section>
      <h2>This is All orders page: {orders.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Buyer Name</th>
              <th>Product Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Price</th>
              <th>payment status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((data) => (
              <Order key={data._id} data={data}></Order>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageAllOrders;
