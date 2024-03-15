import React, { useContext, useRef, useState } from 'react'
import { ShopContexto } from '../../Context/Allproduct'
import logo from './icons/logo.png'
import cart from './icons/cart.png'
import { Link } from 'react-router-dom'
import './Navbar.css'


export const Navbar = () => {
    const [menu, setMenu] = useState('')

    const [allproduct, cartItems, addCart, removeCart,totalCountCart] = useContext(ShopContexto);


    return (
        <div className='navbar'>

            <div className='nav-logo'>
                <Link to={'/'} style={{ textDecoration: 'none', color: 'black', display: 'flex', alignItems: 'center' }}>
                    <img src={logo} />
                    <h1>SHOPPER</h1>
                </Link>
            </div>
            <div className='nav-menu'>
                <li onClick={() => setMenu("Ofertas")}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>Ofertas</Link>{menu == "Ofertas" ? <hr /> : null}</li>
                <li onClick={() => setMenu("Masculino")}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/masculino'}>Masculino</Link>{menu == "Masculino" ? <hr /> : null}</li>
                <li onClick={() => setMenu("Feminino")}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/feminino'}>Feminino</Link>{menu == "Feminino" ? <hr /> : null}</li>
                <li onClick={() => setMenu("Infantil")}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/infantil'}>Infantil</Link>{menu == "Infantil" ? <hr /> : null}</li>
                <li onClick={() => setMenu("Acessórios")}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/acessorios'}>Acessórios</Link>{menu == "Acessórios" ? <hr /> : null}</li>
                <li onClick={() => setMenu("Calçados")}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/calçados'}>Calçados</Link>{menu == "Calçados" ? <hr /> : null}</li>

            </div>

            <div className='nav-user'>
                {localStorage.getItem('auth-token')?
                <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}} className='nav_btn'>Sair</button>
                :<Link to={'/login'}><button className='nav_btn'>Login</button></Link>}

               <Link to={'/cart'}><img src={cart} width={35} ></img> </Link>
               <div className='nav-cart-count'>{totalCountCart}</div>
            </div>

        </div>
    )
}
export default Navbar
