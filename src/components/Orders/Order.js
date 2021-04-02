import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

//======================================================================

const Order = (props) => {

    const { name, price, imageURL, quantity, orderDate, _id } = props.orders;
    console.log(_id);
    // Delete order when user click on delete and call handleDeleteUpdate
    const handleDelteOrder = () => {
        console.log(_id);
        console.log('delte')
        fetch(`http://localhost:5500/deleteOrder/${_id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };



    return (
        <tr style={{ justifyContent: 'center' }}>
            <td style={{ width: '20%' }}><img src={imageURL} style={{ width: '100%' }} alt="pd image" /></td>
            <td style={{ width: '35%' }}>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{orderDate}</td>
            <td style={{ fontSize: '30px' }}>
                {/* <FontAwesomeIcon onClick={handleDelteOrder} style={{ cursor: 'pointer' }} icon={faBackspace} /> */}
                <Button onClick={handleDelteOrder}>Delete</Button>

            </td>
        </tr>
    );
};

export default Order;