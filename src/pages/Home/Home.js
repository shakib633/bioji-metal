import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import UseProducts from '../hooks/UseProducts';
import OverView from '../OverView/OverView';
import Banner from './../Banner/Banner';

const Home = () => {
    const [product]= UseProducts();
    const sliceProducts= product.slice(0,3)
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center text-2xl font-bold mt-8 "> Our Products</h2>
            <div className="inline grid gap-x-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
              {
                  sliceProducts.map(product => <Cart key={product._id} product={product}></Cart>)
              }
            </div>
            <Link to='/ProductsCart'><button className='btn btn-outline'>See All</button></Link>

            <OverView></OverView>
        </div>
    );
};

export default Home;