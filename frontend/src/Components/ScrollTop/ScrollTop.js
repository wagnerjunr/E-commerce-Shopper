import React, { useEffect, useState } from 'react'
import { IoIosArrowDropupCircle } from "react-icons/io";
import './scrolltop.css'

const ScrollTop = () => {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {

            if (window.scrollY > 200) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        })
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        scroll ? (
            <div className='scrolltop'>
                <IoIosArrowDropupCircle className="scrolltop-icon" onClick={scrollTop} />
            </div>
        ) : null
    )
}

export default ScrollTop
