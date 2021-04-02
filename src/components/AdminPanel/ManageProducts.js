import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPlus, faTh, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// ==============================================================================

const ManageProducts = () => {

  const [products, setProducts] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:5500/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data)
      });
  }, [products]);
  const handleDeleteProduct = (_id) => {
    fetch(`https://blooming-hamlet-96823.herokuapp.com/deleteProduct/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result);
        }
      });
  };

  let serialNo = 1;

  return (
    <>
      <Container>
        <Row>
          <Col md={3} className="sidebar">
            <h4 style={{color:'white', marginBottom:'20px'}}>BIO-XIN COSMETICS</h4>
            <ul style={{listStyleType:'none'}}>
              <Link to="/manageProducts" style={{color:'white'}}><li> <FontAwesomeIcon icon={faTh} /> Manage Product</li></Link>
              <Link to="/adminPanel" style={{color:'white'}}><li> <FontAwesomeIcon icon={faPlus} /> Add Product</li></Link>
              <Link style={{color:'white'}}><li> <FontAwesomeIcon icon={faEdit} /> Edit Product</li></Link>
            </ul>
          </Col>
          <Col md={9}>
            <h2>Manage Product</h2>

            <div className='table-responsive'>
              <table className='table table-borderless table-hover bg-white rounded my-4'>
                <thead className='thead-light'>
                  <tr>
                    <th className='text-secondary' scope='col'>
                      #
                    </th>
                    <th className='text-secondary' scope='col'>
                      Product Name
                    </th>
                    <th className='text-secondary' scope='col'>
                      Weight
                    </th>
                    <th className='text-secondary' scope='col'>
                      Price
                    </th>
                    <th className='text-secondary' scope='col'>
                      Action
                    </th>

                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id}>
                      <td>{serialNo++}</td>
                      <td>{product.name}</td>
                      <td>{product.weight}</td>
                      <td>{product.price}</td>
                      <td className='text-center'>
                        <button
                          onClick={() => handleDeleteProduct(product._id)}
                          className='btn btn-danger'
                        >
                          {' '}
                          <FontAwesomeIcon icon={faTrash} size='xs' />{' '}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ManageProducts;
