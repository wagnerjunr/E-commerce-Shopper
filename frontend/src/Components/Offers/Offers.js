import React from 'react'
import './offers.css'
import { Form } from 'react-router-dom';

 const Offers = () => {
  return (

    <div className='offers'>
        <h1>Receba Ofertas Exluclusivas</h1>
        <div className='subscribe'>
            <input type='text' placeholder='Seu Email'></input>
            <button>Inscreva-se</button>
        </div>
    </div>
  )
}

export default Offers;
