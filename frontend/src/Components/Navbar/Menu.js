import React, { useState } from 'react'
import { Link } from 'react-router-dom'


 const Menu = (props) => {

    const [menu, setMenu] = useState('')

  return (
    <div className = {props.menu === 'drawer'? 'nav-menu-drawer':'nav-menu'}>
    <li onClick={() => setMenu("Ofertas")}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>Ofertas</Link>{menu == "Ofertas" ? <hr /> : null}</li>
    <li onClick={() => setMenu("Masculino")}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/masculino'}>Masculino</Link>{menu == "Masculino" ? <hr /> : null}</li>
    <li onClick={() => setMenu("Feminino")}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/feminino'}>Feminino</Link>{menu == "Feminino" ? <hr /> : null}</li>
    <li onClick={() => setMenu("Infantil")}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/infantil'}>Infantil</Link>{menu == "Infantil" ? <hr /> : null}</li>
    <li onClick={() => setMenu("Calçados")}><Link style={{ textDecoration: 'none', color: 'black' }} to={'/calçados'}>Calçados</Link>{menu == "Calçados" ? <hr /> : null}</li>
    </div>
  )
}

export default Menu;
