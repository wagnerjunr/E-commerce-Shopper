import React from 'react'
import { Link } from 'react-router-dom';
import './product.css'


const product = (props) => {
    return (
        <div className='product'>
            <div className='image'>
                <Link to={`/product/${props.product.id}`}><img src={props.product.image} alt={product.description} ></img> </Link>
            </div>

            <section className='description'>
                <p1>{props.product.description}</p1>
            </section>

            <section className='price'>
                <p1>R${props.product.old_price}</p1>
                <p1>R${props.product.new_price}</p1>
            </section>
        </div>
    )
}

export default product;
