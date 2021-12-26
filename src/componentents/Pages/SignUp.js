import React from "react";
import classes from "../../styles/Signup.module.css";
import Button from "../Butoon";
import Checkbox from "../CheckBox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

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
