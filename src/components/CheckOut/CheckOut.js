import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import { UserContext } from '../../App';


const CheckOut = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { _id } = useParams()
    const [product, setProduct] = useState({});



    useEffect(() => {
        fetch(`http://localhost:5500/checkout/${_id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [_id]);

    const handleAddOrder = () => {
        const quantity = 1;
        const orderDate = (new Date().toDateString('dd/MM/yyyy'));
        const userEmail = loggedInUser.email;
        const newOrder = { ...product, quantity, orderDate, userEmail };
        console.log(newOrder)

        fetch('https://blooming-hamlet-96823.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder),
        })
            .then((res) => res.json())
            .then((data) => {
                // if (data) {
                //   handleUserTask();
                // }
                console.log(data)
            });
    };
    return (
        <div>
            <Header></Header>

            <div style={{ width: '80%', margin: '0 auto' }} className="mt-5 align-items-start">
                <h3>Checkout</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Description</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.name}</td>
                            <td>1</td>
                            <td>${product.price}.00</td>

                        </tr>
                        <tr>
                            <td colspan="2">Total</td>

                            <td>${product.price}.00</td>

                        </tr>

                    </tbody>

                </Table>
                <div className="float-right"><Button onClick={handleAddOrder}>Checkout</Button></div>
            </div>


        </div>
    );
};

export default CheckOut;