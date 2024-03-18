import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Ecommerce from './Ecommerce';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login/LoginPage';
import Signup from './Pages/Login/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Ecommerce />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/masculino",
        element: <Shop title={"Roupas Masculinas"} category={"masculino"}></Shop>
      },
      {
        path: "/feminino",
        element: <Shop title={"Roupas Femininas"} category={"feminino"}></Shop>
      },
      {
        path: "/infantil",
        element: <Shop title={"Roupa Infatil"} category={"infantil"}></Shop>
      },
      {
        path: "/calçados",
        element: <Shop title={"Calçados"} category={"calçados"}></Shop>
      },
      {
        path: "/product/:id",
        element: <Product />
      }, 
      {
        path: "/cart",
        element: <Cart/>
      }, 
      {
        path: "/login",
        element: <Login/>
      }
      , 
      {
        path: "/signup",
        element: <Signup/>
      }
    ]

  }])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
