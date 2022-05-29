import React from 'react';
import {useState, useEffect} from 'react'

const UseProducts = () => {
    const [products , setProducts]=useState([]);

    useEffect(()=>{
        fetch('https://ancient-ravine-57330.herokuapp.com/products/')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    },[products]);
    return [products, setProducts];
};

export default UseProducts;