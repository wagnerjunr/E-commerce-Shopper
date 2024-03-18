import React from 'react'
import './footer.css'
import logo from './icons/logo.png'
import { Link } from 'react-router-dom'
import insta from './icons/instagram_icon.png'
import whats from './icons/whatsapp_icon.png'
import pintester from './icons/pintester_icon.png'



const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={logo} />
        <h1>SHOPPER</h1>
      </div>
      <div className='footer-contact'>
        <li>Companhia</li>
        <li >Produtos</li>
        <li>Perguntas</li>
        <li>Sobre</li>
        <li >Contato</li>
      </div>

      <div className='contact'>
       <a href='https://www.instagram.com/' target='_blank'><img src = {insta}></img></a> 
        <a href='https://wa.me/5512993234592' target='_blank'><img src = {whats}></img></a>
       <a href='https://br.pinterest.com/' target='_blank'><img src = {pintester}></img></a> 
      </div>
      <hr/>
    </div>
  )
}

export default Footer;