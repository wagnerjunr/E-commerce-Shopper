import React, { useEffect, useState,useContext } from 'react'
import { ShopContexto } from '../../Context/Allproduct';
import Carousel from '../Carousel/Carousel';
import './popular.css'

const Popular = () => {

  const [,,,,,,popular] = useContext(ShopContexto);

  const [slide,setSlide] = useState(4);

  useEffect(()=>{
    window.addEventListener("resize", changeHandle);

    return () => {
      window.removeEventListener("resize", changeHandle);
    };
  },[])

  function changeHandle(){
    if(window.innerWidth<=630){
      setSlide(2);
      if(window.innerWidth<=330){
        setSlide(1);
      }
    }else{
      setSlide(4);
    }
  }


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slide,
    slidesToScroll: 1,
  };

  return (
    <div className='popular-session'>
      <h1>PRODUTOS POPULARES</h1>
      <hr/>
      <Carousel products={popular}></Carousel>

      </div>
  )
}
export default Popular