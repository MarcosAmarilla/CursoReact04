import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './Styles.scss';

const Nav = () => {
    return (
        <ul className="navContainer">
            <li className="list">Inicio</li>
            <li className="list">Productos</li>
            <li className="list">Referencias Comerciales</li>
            <li className="list">Contacto</li>
            <li className="list"><CartWidget/></li>
        </ul>
        
    )
}

export default Nav;