import React, { useEffect, useState } from 'react'
import './productlist.css'

 const ProductList = () => {

    const [allproducts,setAllProducts] = useState([])

    const fetchProducts = async()=>{
        await fetch('http://localhost:4000/allproducts')
        .then((res)=> res.json())
        .then((data)=> {setAllProducts(data)})
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    const removeProduct = async(id)=>{
        await fetch('http://localhost:4000/removeproduct',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:id})
        })
        await fetchProducts();
    }

  return (
    <div className='admin'>
            <div className='products-list'>
                <h1>Lista de Produtos</h1>
                <div className='product-list-grid'>
                    <p1>Produtos</p1>
                    <p1>Título</p1>
                    <p1>Preço Antigo</p1>
                    <p1>Preço Novo</p1>
                    <p1>Categoria</p1>
                    <p1>Remover</p1>
                </div>
                <hr></hr>
                <div className='allproducts-list'>
                    {allproducts.map((product,index)=>{
                        return(
                            <div key={index} className='product-list-grid'>
                                <img src={product.image} width={100}></img> 
                                <p1>{product.description}</p1>
                                <p1>R${(product.old_price).toFixed(2)}</p1>
                                <p1>R${(product.new_price).toFixed(2)}</p1>
                                <p1>{product.category}</p1>
                                <button onClick={()=>{removeProduct(product.id)}}className='list-remove-btn'>X</button>
                            </div>
                        )
                    })}

                </div>
            </div>
    </div>
  )
}

export default ProductList
