import React from 'react'
import Item from '../Item/product';
import './collection.css'
import data_product from '../Assets/data_popular';
import { Link } from 'react-router-dom';


const Collection = () => {
  
  return (
    <div className='collection'>
      <h1>NOVA COLEÇÃO</h1>
      <hr/>
      <div className='grid-collection'>
        {data_product.map((product) => (
          <div className='product-collection' key={product.id}>
            <Item product={product}></Item>
          </div>
        ))}
      </div>
      <Link to={'/feminino'}><button onClick={()=>window.scrollTo(0,0)} className='btn-explore'>Explore Mais</button> </Link>
    </div>
  )
}
export default Collection;