import React, { useContext, useState } from 'react'
import { ShopContexto } from '../Context/Allproduct';
import Item from '../Components/Item/product';

import sort from './style//image/dropdown_icon.png'
import './style/shop.css'


const Shop = (props) => {

    const [allproduct] = useContext(ShopContexto);
    const [stateButton, setStateButton] = useState(false)

    return (
        <div className='shop'>
            <div className='shop-category'>
                <h1>{props.title}</h1>
                <hr></hr>
            </div>

            <div className='shop-short'>
                <p1>Ordenar</p1>
                <img src={sort}></img>
            </div>

            <div className='shop-grid'>
                {allproduct.map((product) => {
                    if (props.category === product.category) {
                        return (
                            <div className='product' key={product.id}>
                                <Item product={product}></Item>
                            </div>)
                    } else {
                        return null;
                    }
                })}
            </div>

            <div className='shop-explore'>
                {stateButton ?
                    <div className='shop-grid'>
                        {allproduct.map((product) => {
                            if (props.category === product.category) {
                                return (
                                    <div className='product' key={product.id}>
                                        <Item product={product}></Item>
                                    </div>)
                            } else {
                                return null;
                            }
                        })}
                    </div> : null}

            </div>
            <button onClick={() => setStateButton(true)} className={stateButton ? 'btn-explore hidden' : 'btn-explore'}>Mostrar Mais</button>
            <button onClick={() => setStateButton(false)} className={stateButton ? 'btn-explore ' : 'btn-explore hidden'}>Mostrar Menos</button>

        </div>
    )
}

export default Shop;

