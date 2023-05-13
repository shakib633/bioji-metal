import React from 'react';

const Products = ({ product }) => {
    const { name, picture, about, total, minimum, price } = product;
    return (
        <section>
            <div className="card w-fit bg-base-100 shadow-xl mb-16 mt-16">
                <figure><img style={{ width: '200px' }} src={picture} alt="parts" /></figure>
                <div className="card-body text-left">
                    <h2 className="card-title">
                        <span className='font-bold'>Name:</span>{name}
                    </h2>
                    <p><span className='font-bold'>Description:</span> {about}</p>
                    <p><span className='font-bold'>Available Quantity:</span> {total}</p>
                    <p><span className='font-bold'>Minimum Order Quantity:</span> {minimum}</p>
                    <p><span className='font-bold'>Price:</span> ${price} (per unit)</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline btn-success">order</button>
                    </div>
                </div>
            </div>


        </section>


    );
};

export default Products;