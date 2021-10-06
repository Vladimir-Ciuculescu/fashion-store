import React from 'react';
import './custom-button.styles.css';

const CustomButton = ({children, IsGoogleSignIn, inverted, ...otherProps}) => {
    
    //The children property or parameter represents the children on the element. 
    //In our case the children is what is between the tags of <CusmtomButton> and </CustomButton>
    return (
        <button className={ `${inverted ? 'inverted' : ''} ${IsGoogleSignIn ? 'google-sign-in' : ''} custom-button `}
            {...otherProps} >{children}</button>
    );    

}

export default CustomButton;