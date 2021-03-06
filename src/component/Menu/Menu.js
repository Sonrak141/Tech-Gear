import React from "react";
import "./Menu.css";
import CartWidget from "../CartWidget/CartWidget.js";
import {NavLink} from 'react-router-dom'

function Menu() {
  return (
    <div>
      <div className="navegacion">
        <ul>
        <NavLink className='link' activeStyle={{color: "#ffff"}} exact to='/'>Inicio</NavLink>
        <NavLink className='link' activeStyle={{color: "#ffff"}} to='/promociones'>Promociones</NavLink>
        <NavLink className='link' activeStyle={{color: "#ffff"}} to='/categorias'>Categorias</NavLink>
        <li className="link">
        <CartWidget />
        </li>
        </ul>
        
      </div>
      
    </div>
  );
}

export default Menu;
