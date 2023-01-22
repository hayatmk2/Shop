import React from 'react'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import OrderScreen from './screens/OrderScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';

const App = () =>{
  return(
    <>
    <Router>
    <Header/>
    <main>
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen/>} exact />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path= "/login" element={<LoginScreen />}/>
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />        
            <Route path='/placeorder' element={<PlaceOrderScreen />} />  
            <Route path='/order/:id' element={<OrderScreen />} />     
            <Route path="/cart/:id" element={<CartScreen/>} />
            <Route path='/cart' element={<CartScreen />} />

          </Routes>
        </Container>
    </main>
    <Footer/>
    </Router>
    </>  
  );
}
export default App;