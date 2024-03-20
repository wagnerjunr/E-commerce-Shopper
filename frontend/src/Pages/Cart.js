import React, { useContext, useState } from 'react'
import { ShopContexto } from '../Context/Allproduct';
import { Link } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";

import './style/cart.css'


const Cart = () => {
    const [allproduct, cartItems, addCart, removeCart,totalCount,totalCart] = useContext(ShopContexto);
    const [cupomInput,setCupomInput] = useState('');
    const [buttonDescont,setButtonDescont] = useState(false);

    const handleDescont = (e)=>{
        e.preventDefault();
        if(cupomInput === 'Wagner10'){
            setButtonDescont(true);
        }else{
            setButtonDescont(false);
        }
    }

    return (
        
        <div className='cart'>
        
            <div className='cart-item infobar'>
                <p1>Produto</p1>
                <p1>Descrição</p1>
                <p1>Valor</p1>
                <p1>Tamanho</p1>
                <p1>Quantidade</p1>
                <p1>Total</p1>
                <p1>Remover</p1>
            </div>
            <hr></hr>
            <div className='cart-items'>
                {allproduct.map((item) => {
                    const cartItem = cartItems[item.id];
                    if (cartItem.quant > 0) {
                        return (
                            <div className='cart-container'>
                                <div className='cart-item cart-product' key={item.id}>
                                    <Link to={`/product/${item.id}`}> <img src={item.image} width={100}></img> </Link>
                                    <p1>{item.description} </p1>
                                    <p1>R${item.new_price.toFixed(2)}</p1>
                                    <div className='size-item'>
                                        {cartItem.size.map((size, index) => (
                                            <p key={index}>{size}</p>
                                        ))}
                                    </div>
                                    <p1>{cartItem.quant}</p1>
                                    <p1>R${(cartItem.quant * item.new_price).toFixed(2)} </p1>

                                    <button onClick={() => removeCart(item.id)} className='cart-remove-btn'>X</button>
                                </div>
                                <hr></hr>
                            </div>
                        )
                    }
                })}

            </div>
            <div className='cart-total'>
                <div className='cart-total-title'>
                    <h1>Resumo da Compra</h1>
                    <hr></hr>
                </div>
                <div className='cart-descont'>
                    <p1>Cupom de desconto</p1>
                    <div className='cart-descont-cupom'>
                        <input onChange= {(e)=>setCupomInput(e.target.value)} type='text' placeholder='Digite o código do cupom'></input>
                        <button onClick={handleDescont}>OK </button>
                    </div>
                </div>
                <div className='cart-value'>
                    <section className='cart-value-items'>
                        <p1>Subtotal</p1>
                        <p1>R${totalCart}</p1>
                    </section>

                    <section className='cart-value-items'>
                        <p1>Cupom</p1>
                        <p1>R${buttonDescont?(totalCart-(totalCart*0.9)).toFixed(2):'0.00'}</p1>
                    </section>

                    <section className='cart-value-items total'>
                     <p1> <FaShoppingBag/> Total do pedido:</p1>
                        <p1>R${buttonDescont?(totalCart*0.9).toFixed(2):totalCart}</p1>
                    </section>

                    <section className='cart-btn'>
                    <button className='btn-cart finish'>FINALIZAR COMPRA</button>
                   <Link to={'/'}><button className='btn-cart continue' onClick={()=>window.scrollTo(0,0)}>CONTINUAR COMPRANDO</button> </Link> 
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Cart;
