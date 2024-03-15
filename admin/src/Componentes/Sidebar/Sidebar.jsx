import React from 'react'
import cart from './image/Product_Cart.svg'
import list from './image/Product_list_icon.svg'

import './sidebar.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-add-product'>
          <Link to={'/'}><img src={cart}></img></Link> 
           <p1>Add Product</p1>
        </div>

        <div className='sidebar-list-product'>
           <Link to='/product_list'><img src={list}></img></Link>
           <p1>Product List</p1>
        </div>
    </div>
  )
}

export default Sidebar;
