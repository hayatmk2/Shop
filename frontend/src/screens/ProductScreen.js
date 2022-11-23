import React from 'react'
import { Link, useParams} from 'react-router-dom'
import products from '../products';
import { Row, Col, Image, Card, Button, ListGroup} from 'react-bootstrap'


const ProductScreen = () => {
  
  const params = useParams();
  const product = products.find((p) => p.id === params.id)

  return (
    <>
      <Link className ='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col>
        
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen