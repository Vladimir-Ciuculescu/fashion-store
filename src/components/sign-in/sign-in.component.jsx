import React from 'react';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.css';
import CustomButton from '../custom-button/custom-button.componenet';

import { SignInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component { 

    constructor(props) { 
        super(props);
 
        this.state = {
            email: '',
            password:''
        }
    }

    //Clears the email and password input fields on form submit
    handleSubmit = async event => { 
        event.preventDefault();
        
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.error(error);
        }

    }

    //Changes the value of the state to the specified input field value 
    handleChange = event => { 
        
        const { value, name } = event.target;
        this.setState({[name]:value})
    }

    render() { 
        return (
            <div className="SignIn">
                <div className = "sign-in-header">
                    <h2>I already have an account</h2>
                    <span className = "span">Sign in with your account</span>
                </div>
                <form className = "submit-form" onSubmit={this.handleSubmit}> 
                    <FormInput type="email" name="email" label = "Email" value={this.state.email} handleChange={this.handleChange} ></FormInput>
                    <FormInput type="password" name="password" label="Password" value={this.state.password} handleChange={this.handleChange} ></FormInput>
                    <div className = "buttons">
                        <CustomButton onClick = {this.handleSubmit} >SIGN IN</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} IsGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>

            </div>
        )
    }

}

export default SignIn;