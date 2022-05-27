import React from 'react';
import UseProducts from '../hooks/UseProducts';
import ProductsCart from './ProductsCart';

const Products = () => {
    const[products ]=UseProducts();
    return (
        <div>
            <div className="inline grid gap-x-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> 
              {
                  products.map(product => <ProductsCart key={product._id} product={product}></ProductsCart>)
              }
            </div>
        </div>
    );
};

export default Products;