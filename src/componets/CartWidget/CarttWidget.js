import React from 'react';
import cartImg from './CartImg.png';
import './CartWidget.css';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext.js';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    
    const {totalQuantity} = useContext(CartContext);

    console.log(totalQuantity())

    const visibilityClass = totalQuantity() > 0 ? '' : 'hidden';

    return (
        <Link to='/cart' className={`cart-widget ${visibilityClass}`}>
            <img src={cartImg} alt="cart-widget" />
            <p>{totalQuantity()}</p>
        </Link>
    )
}

export default CartWidget;