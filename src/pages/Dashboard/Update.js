import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    // load parts data 
    const { id } = useParams();
    const [part, setPart] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [part]);

    const nameRef = useRef('');
    const aboutRef = useRef('');
    const totalRef = useRef('');
    const minimumRef = useRef('');
    const priceRef = useRef('');

    const handleUpdate = event => {
        event.preventDefault();
        const update = {
            name: nameRef.current.value,
            about: aboutRef.current.value,
            minimum: minimumRef.current.value,
            total: totalRef.current.value,
            price: priceRef.current.value
        };


        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => console.log(data));
    }
    return (
        <section className='bg-[#FBF8F1]'>
            <div className="flex flex-col lg:flex-row ">
                <div className="grid flex-grow card  rounded-box place-items-center lg:w-2/4 md:w-full sm:w-full">
                    <div className="card w-4/5 bg-base-100 shadow-xl mb-16 mt-16 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <figure><img src={part.picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                <span className='font-bold'>Name:</span>{part.name}
                            </h2>
                            <p><span className='font-bold'>Description:</span> {part.about}</p>
                            <p><span className='font-bold'>Available Quantity:</span> {part.total}</p>
                            <p><span className='font-bold'>Minimum Order Quantity:</span> {part.minimum}</p>
                            <p><span className='font-bold'>Price:</span> ${part.price} (per unit)</p>
                        </div>
                    </div>
                </div>
                <div className="divider lg:divider-horizontal">OR</div>
                <div className="grid  flex-grow card rounded-box lg:w-2/4 md:w-full sm:w-full">

                    <form onSubmit={handleUpdate} className='flex flex-col	justify-center items-center'>
                        <h2 className='text-5xl font-bold mb-5'>Update</h2>
                        <input ref={nameRef} type="text" value={part.name} className="input w-full max-w-lg mb-3 mt-3" required readOnly />
                        <textarea ref={aboutRef} type="text" value={part.about} className="input w-full max-w-lg mb-3" required readOnly />
                        <input ref={totalRef} type="number" placeholder='Available Quantity' className="input w-full max-w-lg mb-3 mt-3" required />
                        <input ref={minimumRef} type="number" placeholder='Minimum Order Quantity' className="input w-full max-w-lg mb-3 mt-3" required />
                        <input ref={priceRef} type="number" placeholder='Price' className="input w-full max-w-lg mb-3 mt-3" required />
                        <input className='btn btn-outline w-2/4' type="submit" value="Update" />
                    </form>
                </div>
            </div>


        </section >
    );
};

export default Update;