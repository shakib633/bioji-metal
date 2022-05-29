import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51L4hqJCJxwQbEda5HAD8Srs8XEkeGcY1bJJAWK6R15bW4dAMWc41hFef8obJh6jrtmWcwwna2EldY0Bg8410ibwf009QQmgyAx');


const Payment = () => {
    const{id}=useParams();
    const url=`http://localhost:5000/order/${id}`;
    const {data: order, isLoading}=useQuery(['order', id] ,()=> fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
           
  <div className ="card w-50 max-w-md bg-base-100 shadow-2xl my-12 mx-auto">
  <div className="card-body">
    <h2 className="card-title mx-auto hover:text-warning"> {order.productName}</h2>
    <div className="card-actions justify-end">
        <p className="hover:font-semibold hover:text-success">Please Pay : ${order.productPrice}</p>
    </div>
  </div>
</div>
    <div className=" mx-auto card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white">
      <div className="card-body">
        
      <Elements stripe={stripePromise}>
      <CheckOutForm order={order} />
    </Elements>
        
        
      </div>
    </div>
  </div>

    );
};

export default Payment;