import React from 'react';
import './collection-item.styles.css';
import CustomButton from '../custom-button/custom-button.componenet';

import { connect } from 'react-redux';
import { AddItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item,AddItem }) => {
    
    const { name, price, imageUrl } = item;
    
    return (

        <div className="collection-item">
            <img class="image" src={imageUrl}></img>

            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}.00 $</span>
            </div>
            <CustomButton onClick ={() => AddItem(item)}  className="inverted shop-button">ADD TO CART</CustomButton>
        </div>
    )
};


const mapDispatchToProps = dispatch => ({
    AddItem: item => dispatch(AddItem(item))
});

export default connect(null,mapDispatchToProps)(CollectionItem);
