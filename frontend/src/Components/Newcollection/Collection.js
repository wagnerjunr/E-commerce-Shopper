import React, { useEffect, useState } from 'react'
import Item from '../Item/product';
import './collection.css'
import { Link } from 'react-router-dom';


const Collection = () => {

  const [newcolletion,setNewColletion] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcolletion')
    .then((res)=>res.json())
    .then((data)=>setNewColletion(data));
  },[]);
  
  return (
    <div className='collection'>
      <h1>NOVA COLEÇÃO</h1>
      <hr/>
      <div className='grid-collection'>
        {newcolletion.map((product) => (
          <div className='product-collection' key={product.id}>
            <Item product={product} className = "teste"></Item>
          </div>
        ))}
      </div>
      <Link to={'/feminino'}><button onClick={()=>window.scrollTo(0,0)} className='btn-explore'>Explore Mais</button> </Link>
    </div>
  )
}
export default Collection;