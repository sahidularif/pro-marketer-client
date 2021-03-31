import React from 'react';
import './Product.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

const Product = (props) => {
    const { name, weight, price, imageURL } = props.product;

    return (
        <Card  className="mb-3" style={{ width: '22rem',height: '23rem' }}>
            <Card.Img variant="top" src={imageURL} />
            <Card.Body>
                <Card.Title className="text-center" style={{fontSize:'16px'}}>{name}-{weight}</Card.Title>                
               <p className="text-center">${price} <Button variant="outline-danger" size="sm">Buy Now</Button></p>
            </Card.Body>
        </Card>
    );
};

export default Product;