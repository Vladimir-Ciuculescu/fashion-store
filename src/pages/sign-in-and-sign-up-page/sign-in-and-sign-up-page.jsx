import React from 'react';
import './sign-in-and-sign-up-page.styles.css';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


const SignInPage = () => {

    return (
        <div className="Sign-In-Page">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )

}
 
export default SignInPage;