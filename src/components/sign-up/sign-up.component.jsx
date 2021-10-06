import React from 'react';
import '../sign-up/sign-up.styles.css';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.componenet';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends React.Component { 

    constructor() { 
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            ConfirmPassword : ''
        }
    }

    handleSubmit = async event => {
        
        event.preventDefault();

        const { displayName, email, password, ConfirmPassword } = this.state;

        if (password !== ConfirmPassword) { 
            alert("The 2 passwords do not match !");
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, displayName);

            this.setState({
                displayName: '',
                email: '',
                password: '',
                ConfirmPassword : ''
            })

        } catch (error) { 
            console.error(error);
        }
    }

    handleChange = event => { 
        const { name, value } = event.target;

        this.setState({[name]:value})
    }

    render() {
        
        
        const { displayName, email, password, ConfirmPassword } = this.state;
        return (
            <div className="Sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput type="text" name="displayName" value={this.state.displayName} onChange={this.handleChange} label="Display name" required ></FormInput>
                <FormInput type="email" name="email" value={this.state.email} onChange={this.handleChange} label="Email" required ></FormInput>
                <FormInput type="password" name="password" value={this.state.password} onChange={this.handleChange} label="Password" required ></FormInput>
                <FormInput type="password" name="ConfirmPassword" value={this.state.ConfirmPassword} onChange={this.handleChange} label="Confirm password" required ></FormInput>
                <CustomButton type = "submit">SIGN UP</CustomButton>
            </form>
        </div>
        )
    }
}

export default SignUp;