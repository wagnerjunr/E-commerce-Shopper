import React from 'react'
import data from '../Assets/data_hero'

import Slider from "react-slick";
import './hero.css'

export const Hero = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 10000,
    };

    return (
        <div className='hero-carousel'>
            <Slider {...settings} >
                {data.map((hero) => (
                    <div className="hero">
                        <div className='hero-image'>
                            <img src={hero.image} ></img>
                        </div>
                    </div>
                ))}

            </Slider>
        </div>
    )
}

export default Hero;
