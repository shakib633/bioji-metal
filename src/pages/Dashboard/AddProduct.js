import React, { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
    const nameRef = useRef('');
    const pictureRef = useRef('');
    const aboutRef = useRef('');
    const totalRef = useRef('');
    const minimumRef = useRef('');
    const priceRef = useRef('');

    const handleAddProduct = event => {
        event.preventDefault();
        const productName = nameRef.current.value;
        const productImage = pictureRef.current.value;
        const description = aboutRef.current.value;
        const productAvailableQuantity = totalRef.current.value;
        const minimumOrderQuantity = minimumRef.current.value;
        const productPrice = priceRef.current.value;
        const addProduct = {
            name: productName,
            picture: productImage,
            about: description,
            total: productAvailableQuantity,
            minimum: minimumOrderQuantity,
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
                    <input ref={pictureRef} type="text" placeholder="Image URL" className="input w-full max-w-lg mb-3 mt-3 " required />
                    <textarea ref={aboutRef} placeholdertype="text" placeholder="Short Description" className="input w-full max-w-lg mb-3" required />
                    <input ref={totalRef} type="number" placeholder="Available Quantity" className="input w-full max-w-lg mb-3 " required />
                    <input ref={minimumRef} type="number" placeholder="Minimum Order Quantity" className="input w-full max-w-lg mb-3 " required />
                    <input ref={priceRef} type="number" placeholder="Price (per unit)" className="input w-full max-w-lg mb-3 " required />
                    <input className='btn btn-outline w-2/4' type="submit" value="Add Product" />
                </form>
            </div>
            <ToastContainer />
        </section>
    );
};

export default AddProduct;