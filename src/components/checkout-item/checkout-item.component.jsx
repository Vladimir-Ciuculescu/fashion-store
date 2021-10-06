import React from 'react';
import './checkout-item.styles.css';
import { connect } from 'react-redux';
import { ClearItemFromCart, AddItem,RemoveItem } from '../../redux/cart/cart.actions';


const CheckoutItem = ({ cartItem,clearItem, addItem, removeItem}) => {

    const { name, imageUrl, quantity, price } = cartItem;

    return (<div className="Checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" className="Image"></img>
        </div>
    
        <span className="Name">{name}</span>
        <span className="Quantity">
            <div className = "arrow" onClick = {() => removeItem(cartItem)}>&#10094;</div>
            <span className = "value">{quantity}</span>
            <div className = "arrow" onClick = {() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className="Price">{price}</span>
        <div className="remove-button" onClick = {() => clearItem(cartItem)}>&#10005;</div>
    
    </div>)

   
};

const mapDispatchTorProps = dispatch => ({
    clearItem: item => dispatch(ClearItemFromCart(item)),
    addItem: item => dispatch(AddItem(item)),
    removeItem: item => dispatch(RemoveItem(item))
})

export default connect(null,mapDispatchTorProps)(CheckoutItem);