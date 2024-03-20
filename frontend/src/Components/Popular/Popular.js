import React, { useEffect, useState,useContext } from 'react'
import { ShopContexto } from '../../Context/Allproduct';
import Carousel from '../Carousel/Carousel';
import './popular.css'

const Popular = () => {

  const [,,,,,,popular] = useContext(ShopContexto);


  return (
    <div className='popular-session'>
      <h1>PRODUTOS POPULARES</h1>
      <hr/>
      <Carousel products={popular}></Carousel>

    </div>
  )
}
export default Popular