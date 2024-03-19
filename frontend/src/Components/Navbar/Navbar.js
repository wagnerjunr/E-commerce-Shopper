import React, { useContext, useRef, useState } from 'react'
import { ShopContexto } from '../../Context/Allproduct'
import logo from './icons/logo.png'
import cart from './icons/cart.png'
import menu_icon from './icons/menu.png'
import { Link } from 'react-router-dom'
import Menu from './Menu'


// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

import './Navbar.css'


export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)


    const [allproduct, cartItems, addCart, removeCart, totalCountCart] = useContext(ShopContexto);


    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
         <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='navbar-drawer'
            >
                <div className='btn-drawer'>
                    <button onClick={toggleDrawer}>X</button>
                </div>

               <Menu menu = {'drawer'}></Menu>

         </Drawer>

        <div className='navbar'>

            <div className='nav-logo'>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
                    <section onClick={toggleDrawer} className='navbar-menu-open' >
                        <img src={menu_icon} width={15}></img>
                    </section>
                    <img src={logo}/>
                    <h1>SHOPPER</h1>
                </Link>
            </div>

                <Menu menu = {'menu'}></Menu>

            <div className='nav-user'>
                {localStorage.getItem('auth-token') ?
                    <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }} className='nav-btn'>Sair</button>
                    : <Link to={'/login'}><button className='nav-btn'>Login</button></Link>}

                <Link to={'/cart'}><img src={cart} width={35} ></img> </Link>
                <div className='nav-cart-count'>{totalCountCart}</div>
            </div>

        </div>
        </>
    )
}
export default Navbar
