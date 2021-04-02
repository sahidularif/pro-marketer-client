import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Spinner from '../Spinner/Spinner';
import './Products.css';



const Products = () => {
    const [products, setProducts] = useState([]);
    // Spinner or Preloader
    const [preLoaderVisibility, setPreLoaderVisibility] = useState("block");

    useEffect(() => {
        fetch('https://blooming-hamlet-96823.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setPreLoaderVisibility("none");
            })
    }, [])
    return (
        <div className="container">
            <Spinner visibility={preLoaderVisibility} />
            <div className="card">
                {
                    products.map(pd => <Product product={pd}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;