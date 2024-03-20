import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import Item from '../Item/product'


const Carousel = (props) => {

    const [slide, setSlide] = useState();

    useEffect(() => {
        changeHandle()
        window.addEventListener("resize", changeHandle);

        return () => {
            window.removeEventListener("resize", changeHandle);
        };
    }, [])

    function changeHandle() {
        if (window.innerWidth <= 630) {
            setSlide(2);
            if (window.innerWidth <= 330) {
                setSlide(1);
            }
        } else {
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
        <div>
            <Slider {...settings}>
                {props.products.map(item => {
                        return (
                            <div key={item.id} className='carousel'>
                                <Item product={item}></Item>
                            </div>)
                }
                )}
            </Slider>
        </div>
    )
}

export default Carousel
