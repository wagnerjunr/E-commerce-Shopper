import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ShopContexto } from '../Context/Allproduct';
import Slider from "react-slick";
import Item from '../Components/Item/product'
import './style/product.css';


import star from './style/image/star_icon.png';
import star_dull from './style//image/star_dull_icon.png';
import { IoIosArrowForward } from "react-icons/io";

const Product = () => {
  const [allproduct, cartItems, addCart] = useContext(ShopContexto);
  const [size, setSize] = useState('');
  const [toggleState, setToggleState] = useState("description");

  const { id } = useParams();
  const product = allproduct.find((e) => e.id === Number(id));


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id])


  function toggletab(tab) {
    setToggleState(tab);
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>

      <section className='product-trail'>
        <Link style={{ textDecoration: 'none', color: '#5c5c5c' }} to={'/'}><p1>HOME</p1></Link>
        <IoIosArrowForward />
        <Link style={{ textDecoration: 'none', color: '#5c5c5c' }} to={'/'}><p1>OFERTAS</p1></Link>
        <IoIosArrowForward />
        <Link style={{ textDecoration: 'none', color: '#5c5c5c' }} to={'/feminino'}><p1> {product.category} </p1></Link>
        <IoIosArrowForward />
        <p1>{product.description}</p1>
      </section>

      <div className='product-container'>
        <div className='product-grid'>
          <img src={product.image} width={100}></img>
          <img src={product.image} width={100}></img>
          <img src={product.image} width={100}></img>
          <img src={product.image} width={100}></img>
          <img src={product.image} width={430}></img>
        </div>

        <div className='infos'>
          <div className='product-infos'>
            <h1>{product.description}</h1>
            <section className='product-avaliation' >
              <img src={star} width={15}></img>
              <img src={star} width={15}></img>
              <img src={star} width={15}></img>
              <img src={star} width={15}></img>
              <img src={star_dull} width={15}></img>
              <p1> (122)</p1>
            </section>

            <section className='product-price'>
              <p1>R${product.old_price.toFixed(2)}</p1>
              <p1>R${product.new_price.toFixed(2)}</p1>
            </section>
            <p1>{product.description}</p1>
          </div>

          <div className='product-buy'>
            <section>Tamanho</section>
            <div className='product-size'>
              <li onClick={() => setSize("P")}className={size=="P"?'li-bg':null}>P</li>
              <li onClick={() => setSize("M")}className={size=="M"?'li-bg':null} >M</li>
              <li onClick={() => setSize("G")}className={size=="G"?'li-bg':null}>G</li>
              <li onClick={() => setSize("GG")}className={size=="GG"?'li-bg':null}>GG</li>
              <li onClick={() => setSize("XG")}className={size=="XG"?'li-bg':null}>XG</li>
            </div>
            <button onClick={() => {size?addCart(product.id, size):alert("Escolha um tamanho") }} className='product-btn'>COMPRAR</button>
          </div>

          <section className='product-category'>
            Categoria:{product.category}
          </section>
        </div>
      </div>

      <div className='product-comments'>
        <div className='product-tab'>
          <li onClick={() => toggletab("description")} className={toggleState === 'description' ? "tab active" : "tab"}>Descrição</li>
          <li onClick={() => toggletab("avaliation")} className={toggleState === 'avaliation' ? "tab active" : "tab"}>Avaliações (122)</li>
        </div>

        <div className={toggleState === 'description' ? "product-active" : "hidden"}>
          <p1> Blusa Em Meia Malha Com Manga Curta e Bordados De Corações
            Blusa Em Meia Malha Com Manga Curta e Bordados De Corações
            Blusa Em Meia Malha Com Manga Curta e Bordados De Corações
            Blusa Em Meia Malha Com Manga Curta e Bordados De Corações
            Blusa Em Meia Malha Com Manga Curta e Bordados De Corações
            Blusa Em Meia Malha Com Manga Curta e Bordados De Corações.</p1>
        </div>

        <div className={toggleState === 'avaliation' ? "product-active" : "hidden"}>
          <p1> Avaliação </p1>
        </div>
      </div>

      <div className='product-offerts'>
        <h1>PRODUTOS QUE VOCÊ PODE GOSTAR</h1>
        <hr />

        <Slider {...settings}>
          {allproduct.map(item => {
            if (item.category === product.category) {
              return (<div key={item.id} className='carousel'>
                <Item product={item}></Item>
              </div>)

            } else { return null }
          }
          )}
        </Slider>
      </div>


    </div>
  )
}
export default Product;