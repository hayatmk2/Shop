import React, {useEffect, useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, setProducts] = useState([]) //local state
  useEffect(() => {
    const fetchProducts = async () =>{
      const{data} = await axios.get('/api/products') //{data} the destruction of the object to get just the data part
      setProducts(data)
    }  
    fetchProducts()
  }) 
  return (
   <>
   <h1>
    Latest Products
   </h1>
   <Row>
    {products.map((product) => (
      <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
        <Product product={product}/>
      </Col>
    ))}
   </Row>
   </>
  )
}

export default HomeScreen