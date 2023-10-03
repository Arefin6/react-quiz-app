import React from "react";
import Button from "../components/Button";
import Checkbox from "../components/CheckBox";
import Form from "../components/Form";
import Illustration from "../components/Illustration";
import TextInput from "../components/TextInput";
import classes from "../styles/Signup.module.css";

const SignUp = () => {
  return (
    <>
      <h1>Create An Account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter Person" icon="person" />

          <TextInput
            type="email"
            placeholder="Enter Email"
            icon="alternate_email"
          />

          <TextInput type="password" placeholder="Enter Password" icon="lock" />

          <TextInput
            type="password"
            placeholder="Confirm Password"
            icon="lock_clock"
          />

          <Checkbox text="I agree to the Terms &amp; Conditions" />
          <Button><span>Submit Now</span></Button>

          <div className="info">
            Already have an account? <a href="/">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default SignUp;
