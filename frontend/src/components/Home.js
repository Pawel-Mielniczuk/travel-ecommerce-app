import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col }  from 'react-bootstrap';
import Product from './Product';
import Loader from './Loader';
import Message from './Message';
import { listProducts } from '../actions/productActions';


const Home = () => {
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  

  return (
    <>
      <h1>Our products</h1>
      {loading ? (<Loader/>): error ? (<Message variant='danger' />) : (
        <Row>
          {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default Home;