import React from 'react';
import './checkout-page.styles.css';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect'; 
import { selectCartItems } from '../../redux/cart/cart.selector'
import { selectCartTotal } from '../../redux/cart/cart.selector'
import  CheckOutItem  from '../../components/checkout-item/checkout-item.component';


const CheckoutPage = ({cartItems, total}) => {
    
    return(

        <div className = "checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (
                    <CheckOutItem cartItem={cartItem}></CheckOutItem>
                ))
                }

            <div className="total-price">TOTAL PRICE: {total} $</div>

        </div>

    )

};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total : selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);