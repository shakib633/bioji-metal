import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import {  useNavigate } from 'react-router-dom';

const MyOrders = () => {
    const [orders, setOrders] =useState([])
    const [user]=useAuthState(auth);
    const navigate = useNavigate();

    useEffect(()=>{

        if(user){
            fetch(`http://localhost:5000/orders?buyerEmail=${user.email}`,{
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json()
            })

        .then(data=> setOrders(data))
        }
    },[])
    return (
        <section>
        <h3>My Orders: {orders.length}</h3>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Product Name</th>
                        <th>Buyer Name</th>
                        <th>Buyer Email Address</th>
                        <th>Buyer Address</th>
                        <th>Quantity</th>
                        <th>Product Price</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((data, index) => <tr key={data._id}>
                            <th>{index + 1}</th>
                            <td>{data.productName}</td>
                            <td>{data.buyerName}</td>
                            <td>{data.buyerEmail}</td>
                            <td>{data.buyerAddress}</td>
                            <td>{data.productQuantity}</td>
                            <td>{data.productPrice}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </section>
    );
};

export default MyOrders;