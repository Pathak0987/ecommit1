import { Route , Routes } from 'react-router-dom';
import './App.css';
import Footer from './componets/Footer';

import Header from './componets/Header';
import Navbar from './componets/Navbar';

import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Payment from './pages/Payment';

function App() {
  return (
    <>
       <Header />
       <Navbar />
       <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path='/payment' element={<Payment />}></Route>
       </Routes>
       <Footer  />
    </> 
  );
}

export default App;