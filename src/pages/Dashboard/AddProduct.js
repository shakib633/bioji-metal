import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const nameRef = useRef('');
    const imageRef = useRef('');
    const descriptionRef = useRef('');
    const availableQuantityRef = useRef('');
    const minimumOrderQuantityRef = useRef('');
    const priceRef = useRef('');

    const handleAddProduct = event => {
        event.preventDefault();
        const productName = nameRef.current.value;
        const productImage = imageRef.current.value;
        const description = descriptionRef.current.value;
        const productAvailableQuantity = availableQuantityRef.current.value;
        const minimumOrderQuantity = minimumOrderQuantityRef.current.value;
        const productPrice = priceRef.current.value;
        const addProduct = {
            name: productName,
            picture: productImage,
            short_description: description,
            available_quantity: productAvailableQuantity,
            minimum_order_quantity: minimumOrderQuantity,
            price: productPrice
        };
        console.log(addProduct);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                toast.info("Product added successfully")
                console.log(data);
            })
    }

    return (
        <section>
            <div>
                <h2 className='text-4xl text-center p-5 font-bold'> Add new Product </h2>

                {/* form  */}
                <form className='flex flex-col items-center' onSubmit={handleAddProduct}>
                    <input ref={nameRef} type="text" placeholder="Name" className="input w-full max-w-lg mt-3 " required />
                    <input ref={imageRef} type="text" placeholder="Image URL" className="input w-full max-w-lg mb-3 mt-3 " required />
                    <textarea ref={descriptionRef} type="text" placeholder="Short Description" className="input w-full max-w-lg mb-3" required />
                    <input ref={availableQuantityRef} type="number" placeholder="Available Quantity" className="input w-full max-w-lg mb-3 " required />
                    <input ref={minimumOrderQuantityRef} type="number" placeholder="Minimum Order Quantity" className="input w-full max-w-lg mb-3 " required />
                    <input ref={priceRef} type="number" placeholder="Price (per unit)" className="input w-full max-w-lg mb-3 " required />
                    <input className='btn btn-outline w-2/4' type="submit" value="Add Product" />
                </form>
            </div>
            <ToastContainer />
        </section>
    );
};

export default AddProduct;