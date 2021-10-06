import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkoutpage/checkout-page.component';
import Header from './components/header/header.component';
import SignInPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser} from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {


    //At the beginning, the session is closed, the user is not logged in !
    unsubscribeFromAuth = null;


    //user is an object from the firebase library

    //componentDidMount is called as soon as the component is mounted
    //Opens a login session, or 'open subscription'
    componentDidMount() { 

        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) { 
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                     setCurrentUser({
                            id: snapShot.id,
                            ...snapShot.data()
                        
                    });
                });

                console.log(this.state);
                
            }

            setCurrentUser(userAuth);

        });
    }

    


    render() { 
        return (
            <div>
                <Header></Header>
                <Switch>
                    <Route exact path='/' component={HomePage}></Route>
                    <Route exact path='/shop' component={ShopPage}></Route>
                    <Route exact path='/checkout' component={CheckoutPage}></Route>
                    <Route exact path='/signin' render = {() => this.props.currentUser ? (<Redirect to = '/'></Redirect>) : (<SignInPage></SignInPage>)}></Route>
                </Switch>
            </div>
        );
    }


}
  
const mapStatetoProps = createStructuredSelector({
    currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStatetoProps, mapDispatchToProps)(App);
