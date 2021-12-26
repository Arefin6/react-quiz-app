import React from 'react';
import classes from "../../styles/Signup.module.css";
import Button from '../Butoon';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';

const Login = () => {
    return (
    <>
       <h1>Login To Your Account</h1>
       <div className="column">
        <Illustration />
        <Form className={`${classes.login}`}>

          <TextInput
            type="email"
            placeholder="Enter Email"
            icon="alternate_email"
          />

          <TextInput 
          type="password"
          placeholder="Enter Password"
          icon="lock" />

          
          <Button><span>Submit Now</span></Button>

          <div className="info">
            Don't Have an account? <a href="/">SignUp</a> instead.
          </div>
        </Form>
      </div>  
    </>
    );
};

export default Login;