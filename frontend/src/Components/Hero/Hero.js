import React from 'react'
import data from '../Assets/data_hero'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import './hero.css'

export const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };


    return (
        <div className='hero-carousel'>
            <Slider {...settings} >
                {data.map((hero) => (
                        <div className='hero-image' key={hero.id} >
                           <Link to = '/feminino'><img className='hero-img'src={hero.image} ></img></Link> 
                        </div>
                ))}

            </Slider>
        </div>
    )
}

export default Hero;
