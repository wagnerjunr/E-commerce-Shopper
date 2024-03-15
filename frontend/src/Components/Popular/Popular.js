import React from 'react'
import data_product from '../Assets/data_popular';
import Item from '../Item/product'
import Slider from "react-slick";
import './popular.css'

const Popular = () => {

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
      <hr />

      <Slider {...settings} >
        {data_product.map(item =>
          <div key={item.id} className='carousel'>
            <Item  product={item}></Item>
          </div>)}
      </Slider>

    </div>
  )
}
export default Popular