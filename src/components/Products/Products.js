import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5500/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="container">
            <div className="card">
                {
                    products.map(pd => <Product product={pd}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;