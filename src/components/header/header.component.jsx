import React from 'react';
import './header.styles.css';
import { Link,withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden} from '../../redux/cart/cart.selector';
import { selectCurrentUser} from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';


const Header = ({currentUser, hidden}) => { 

    return (

        <div className="header">
            <Link className = "icon" to="/">
                <Logo></Logo>  
            </Link>
            <div className="options">
            
            
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                <Link>
                    {
                    currentUser ?
                        (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                    :
                        (<div className = "option"><Link className ="option" to = "/signin">SIGN IN</Link></div>)
                    }
                </Link>
                <CartIcon></CartIcon>
            </div>
            {
                hidden ? null : (<CartDropDown></CartDropDown>)
            }
        </div>

    )
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
    hidden : selectCartHidden
});


export default withRouter(connect(mapStateToProps)(Header));
