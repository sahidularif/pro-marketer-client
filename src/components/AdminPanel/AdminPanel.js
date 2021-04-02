import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCloudUploadAlt, faCoffee, faEdit, faPlus, faTh } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { Link } from 'react-router-dom';
import './AdminPanel.css';
import axios from 'axios';


const AdminPanel = () => {
    // const { register, handleSubmit, watch, errors } = useForm();
    // const [imageURL, setIMageURL] = useState(null);
    const [productData, setProductData] = useState({});


    const handleBlur = (e) => {
        const newProduct = { ...productData };
        if (e.target.name === 'name') {
            newProduct.name = e.target.value;
        }
        if (e.target.name === 'weight') {
            newProduct.weight = e.target.value;
        }
        if (e.target.name === 'price') {
            newProduct.price = e.target.value;
        }
        setProductData(newProduct);
        e.preventDefault();

    }


    const handleSubmit = e => {
        e.preventDefault();
        const newProduct = {
            name: productData.name,
            price: productData.price,
            weight: productData.weight,
            imageURL: productData.imageURL
        };
        console.log(newProduct.name, newProduct.price, newProduct.weight, productData.imageURL);
        const url = `https://blooming-hamlet-96823.herokuapp.com/addProduct`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server side response', res))
    };

    // Upload Image
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const newImage = {...productData}
        const imageData = new FormData();
        imageData.set('key', 'a50bd9e146ea263516d08f905253b815');
        imageData.append('image', event.target.files[0]);

        axios.post('https://blooming-hamlet-96823.herokuapp.com/upload',
            imageData)
            .then(function (response) {
                newImage.imageURL = response.data.data.display_url;
                setProductData(newImage);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>

            <Container>
                <Row>
                    <Col md={3} className="sidebar">
                        <h4 style={{color:'white', marginBottom:'20px'}}>BIOXIN CHOSMETICS</h4>
                        <ul style={{listStyleType:'none'}}>
                            <Link to="/manageProducts" style={{color:'white'}}><li> <FontAwesomeIcon icon={faTh} /> Manage Product</li></Link>
                            <Link to="/adminPanel" style={{color:'white'}}><li> <FontAwesomeIcon icon={faPlus} /> Add Product</li></Link>
                            <Link style={{color:'white'}}><li> <FontAwesomeIcon icon={faEdit} /> Edit Product</li></Link>
                        </ul>
                    </Col>
                    <Col md={9}>
                        <h2>Add Product</h2>

                        <Form onSubmit={handleSubmit}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" name="name" placeholder="Enter name" onBlur={handleBlur} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Weight</Form.Label>
                                    <Form.Control type="text" name="weight" placeholder="Product Weight" onBlur={handleBlur} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" name="price" placeholder="Enter Price" onBlur={handleBlur} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Upload Product Picture</Form.Label>
                                    <Form.Control type="file" onChange={handleImageUpload} />
                                </Form.Group>
                            </Form.Row>

                            <Button variant="primary" type="submit">
                            <FontAwesomeIcon icon={faCloudUploadAlt} /> Upload Photo
                            </Button>
                        </Form>


                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AdminPanel;