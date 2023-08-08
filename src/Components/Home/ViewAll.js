import React, { useEffect, useState } from 'react';
import Details from './Details';

const ViewAll = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 px-16 mt-14 gap-y-10'>
           {
            products.map(product =><Details
            key={product._id}
            product = {product}
            ></Details>)
           } 
        </div>
    );
};

export default ViewAll;