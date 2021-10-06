import React from 'react';
import './cart-icon.styles.css';
import {connect} from 'react-redux';

import {toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg';
import {selectCartItemsCount}  from '../../redux/cart/cart.selector';

import { createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden, itemCount}) => {
    
    return (

        <div className="cart-icon" onClick = {toggleCartHidden}>
            <ShoppingIcon className = "shopping-icon"></ShoppingIcon>
            <span className="item-count">{itemCount}</span>
        </div>

    );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})



// cart is the type of cart: cartReducer in root-reducer
//cartItems is the initial empty array from cart.reducer
const mapStatetoProps = createStructuredSelector ({
    itemCount : selectCartItemsCount
});

export default connect(mapStatetoProps, mapDispatchToProps)(CartIcon);