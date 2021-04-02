import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import { UserContext } from '../../App';
import { useContext } from 'react';
import Order from './Order';


const Orders = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [userOrders, setUserOrders] = useState([]);
    const userEmail = userOrders[0]?.userEmail;
    console.log(userEmail)
    console.log(userOrders);
    const totalPayment = userOrders.reduce((sum, product) => sum + product.price * product.quantity, 0);
    const totalQty = userOrders.reduce((sum, product) => sum + product.quantity * product.quantity, 0);


    // Dynamically filter loggedInUser data from API:
    useEffect(() => {
        fetch(
            'http://localhost:5500/userOrders?email=' +
            loggedInUser.email,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
            .then(res => res.json())
            .then(data => {
                setUserOrders(data);

            });
    }, [loggedInUser.email]);

    const handleAddOrder = () => {

    };

    return (
        <div>
            <div>
                <Header></Header>
               
                <div style={{ width: '80%', margin: '0 auto' }} className="mt-5 align-items-start">
                    <h3>Checkout</h3>
                    <h5>{totalQty} orders in cart</h5>
                    <Table striped bordered hover>
                        <thead>
                            <tr>

                                <th>Product image</th>
                                <th>Description</th>                                
                                <th>Unit Price</th>
                                <th>Quantity</th>
                                <th>Order Date</th>
                                <th>Action</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                        {
                            userOrders.map(order=><Order orders={order}></Order>)
                        }
                            <tr>
                                <td colspan="2">Total</td>
                                <td>${totalQty}.00</td>
                                <td>{totalPayment}</td>
                                <td colspan="2"></td>
                                

                            </tr>

                        </tbody>

                    </Table>
                    <div className="float-right"><Button onClick={handleAddOrder}>Proceed Order</Button></div>
                </div>


            </div>
        </div>
    );
};

export default Orders;