import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomeScreen = () => {
  //const [products, setProducts] = useState([]) //local state-only current component see the data
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const {loading, error, products} = productList
  useEffect(() => {
    // const fetchProducts = async () =>{
    //   const{data} = await axios.get('/api/products') //{data} the destruction of the object to get just the data part
    //   setProducts(data)
    // }  
    // fetchProducts()
    dispatch(listProducts())
  },[dispatch]) 
  return (
   <>
   <h1>Latest Products  </h1>
    {loading ? (
    <Loader/>
    ): error ? (
      <Message variant= 'danger'>{error}</Message>
    ) : (
      <Row>
      {products.map((product) => (
        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product}/>
        </Col>
      ))}
     </Row>
    )
    }  
   </>
  )
}
export default HomeScreen