import React from 'react';
import './cart-item.styles.css';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    
    return (
        <div className="cart-item">
            
            <img className="cart-image" src={imageUrl}></img>
            
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} X {price} $ = {price * quantity} $</span>
            </div>
        </div>
        
    )
};

export default CartItem;