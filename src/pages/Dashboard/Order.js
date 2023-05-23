import React from "react";

const Order = ({ data }) => {
  return (
    <tr>
      <th></th>
      {/* <td>
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src={data.picture} alt="" />
          </div>
        </div>
      </td> */}
      <td>{data.buyerName}</td>
      <td>{data.productName}</td>
      <td>{data.buyerEmail}</td>
      <td>{data.buyerAddress}</td>
      <td>{data.productPrice}</td>
      <td>
        {(data.transactionId && (
          <span className="text-success ">Paid</span>
        )) || <span className="text-red-500">Not paid yet</span>}
      </td>
    </tr>
  );
};

export default Order;
