import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import validator from "email-validator";
import ErrorField from "./ErrorField"

class SignUpForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <Field name="email" component={ErrorField} />
          <Field name="password" component={ErrorField} type="password" />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = ({ email, password }) => {
  const errors = {};

  if (!email) errors.email = "email is required";
  else if (!validator.validate(email)) errors.email = "invalid email";

  if (!password) errors.password = "password is required";
  else if (password.length < 8) errors.password = "password to short";

  return errors;
};

export default reduxForm({
  form: "auth",
  validate
})(SignUpForm);
