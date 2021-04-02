import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Admin.css';

const Admin = () => {
    const handleAddProduct = () => {
        console.log('clicked');
    }
    return (
        <Container>
            <Row>
                <Col xs={6} md={4} className="sidebar">
                    <h4>BIOXIN COSMETICS</h4>
                    <ul>
                        <li><Button>Add Product</Button></li>
                    </ul>
                </Col>
                <Col xs={12} md={8} className="main">
                    <h4>This is product</h4>

                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter product name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Wight</Form.Label>
                                <Form.Control type="text" placeholder="Enter Product Wight" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Add Price</Form.Label>
                                <Form.Control type="text" placeholder="Enter Product Price" />
                            </Form.Group>
                                <br/>
                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Add Photo</Form.Label>
                                <Form.Control type="file" placeholder="Upload Photo" />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Col>
            </Row>

        </Container>

    );
};

export default Admin;