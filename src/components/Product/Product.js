import React from 'react';
import './Product.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, weight, price, imageURL, _id } = props.product;

    return (
        <Card  className="mb-3" style={{ width: '22rem',height: '23rem' }}>
            <Card.Img variant="top" src={imageURL} />
            <Card.Body>
                <Card.Title className="text-center" style={{fontSize:'16px'}}>{name}-{weight}</Card.Title>                
               <p className="text-center">${price} <Link to={'checkout/' + _id }><Button variant="outline-danger" size="sm">Buy Now</Button></Link></p>
            </Card.Body>
        </Card>
    );
};

export default Product;