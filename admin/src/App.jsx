import React from 'react'
import Navbar from './Componentes/Navbar/Navbar';
import Sidebar from './Componentes/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='dashboard'>
        <Sidebar />
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default App;
