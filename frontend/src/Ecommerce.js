import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import { ShopProvider } from './Context/Allproduct';
import ScrollTop from './Components/ScrollTop/ScrollTop';

import './ecommerce.css'

function Ecommerce() {
  return (
    <div className="ecommerce">
      <ShopProvider>
        <Navbar/>
        <Outlet />
        <Footer />
      </ShopProvider>

      <ScrollTop/>
    </div>
  );
}

export default Ecommerce;
