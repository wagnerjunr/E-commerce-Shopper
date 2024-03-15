import React, { useState } from 'react'
import upload_image from './image/upload_area.svg'

import './admin.css'

const Admin = () => {

    const [image,setImage] = useState(false)
    const [productDetails,setProductDetails] = useState({
      description:"",
      image:"",
      category:"masculino",
      new_price:"",
      old_price:""
    })

    const imageHandler = (e) =>{
      setImage(e.target.files[0]);
    }

    const changerHandler = (e) =>{
      setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }

    const add_product = async() =>{
      console.log(productDetails);
      let responseData;
      let product = productDetails;

      let formData = new FormData();
      formData.append('product',image);

      await fetch('http://localhost:4000/upload',{
        method:'POST',
        headers:{
          Accept:'application/json',
        },
        body:formData,
      }).then((res)=> res.json()).then((data)=>{responseData = data})

      if(responseData.success){
        product.image = responseData.image_url;
        console.log(product);
        await fetch('http://localhost:4000/addproduct',{
          method:'POST',
          headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
          },
          body:JSON.stringify(product),
        }).then((resp)=>{resp.json()}).then((data)=>{
          alert("Produto adicionado");
        })
      }

    }

  return (
    <div className='admin'>
      <div className='forms-addproduct'>
        <div className='forms-product-title'>
          <p1>Título do Produto</p1>
          <input value={productDetails.description} type='text' name='description' onChange={changerHandler}  placeholder='Digite aqui'></input>
        </div>

        <div className='forms-product-price'>
          <section className='forms-product'>
            <p1>Preço do Produto</p1>
            <input type='text' name='old_price' onChange={changerHandler} placeholder='Digite aqui'></input>
          </section>

          <section className='forms-product offer'>
            <p1>Oferta do Produto</p1>
            <input type='text' name='new_price' onChange={changerHandler} placeholder='Digite aqui'></input>
          </section>
        </div>
        <div className='forms-product-category'>
          <p1>Categoria do Produto</p1>
          <select name='category' onChange={changerHandler}>
            <option value="feminino">feminino</option>
            <option value="masculino" selected>masculino</option>
            <option value="infantil">infantil</option>
          </select>
          <div className='upload-image'>
            <label htmlFor='input-image' className='label-image'>
              <img src={image?URL.createObjectURL(image):upload_image} ></img>
            </label>
            <input onChange={imageHandler} type="file" name="images" id='input-image' hidden/>
          </div>
        </div>
        <button onClick={add_product}className='btn-forms'>Adicionar</button>
      </div>
    </div>
  )
}

export default Admin;
