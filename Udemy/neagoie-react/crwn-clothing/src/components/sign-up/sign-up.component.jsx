import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit} className='sign-up-form'>
          <FormInput type='text' name='displayName' label='Display Name' value={displayName} onChange={this.handleChange} />
          <FormInput type='email' name='email' label='Email' value={email} onChange={this.handleChange} />
          <FormInput type='password' name='password' label='Password' value={password} onChange={this.handleChange} />
          <FormInput type='password' name='confirmPassword' label='Confirm Password' value={confirmPassword} onChange={this.handleChange} />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp;