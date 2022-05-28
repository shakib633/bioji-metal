import React from 'react';
import UseProducts from '../hooks/UseProducts';
import AllProducts from './AllProducts';

const ManageProducts = () => {
    const [orders, setOrders] = UseProducts([]);
    return (
        <section>
            <h2>This is Manage Products page: {orders.length}</h2>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Parts Name</th>
                            <th>Available Quantity</th>
                            <th>Minimum Order Quantity</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(data => <AllProducts key={data._id} data={data}></AllProducts>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ManageProducts;