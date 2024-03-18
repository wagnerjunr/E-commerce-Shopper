import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Item from '../Item/product'
import './popular.css'

const Popular = () => {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popular')
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className='popular-session'>
      <h1>PRODUTOS POPULARES</h1>
      <hr/>
      
        <Slider {...settings} >
          {popular.map(item =>
            <div key={item.id} className='carousel'>
              <Item product={item}></Item>
            </div>)}
        </Slider>
      </div>
  )
}
export default Popular