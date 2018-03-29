import React, { Component } from "react";
import SignInForm from "../auth/SignInForm";
import SignUpForm from "../auth/SignUpForm";
import { Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signUp, signIn, moduleName } from "../../ducks/auth";

import Loading from "../Loading";

class AuthPage extends Component {
  handleSignUp = user => {
    this.props.signUp(user);
  };

  handleSignIn = user => {
    this.props.signIn(user);
  };

  render() {
    const { loading } = this.props;
    return (
      <div>
        <h1>Auth Page</h1>
        <nav>
          <ul>
            <li>
              <NavLink to="/auth/signin" activeClassName="active">
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink to="/auth/signup" activeClassName="active">
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="/people" activeClassName="active">
                ADD PERSON
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeClassName="active">
                ADMIN
              </NavLink>
            </li>
          </ul>
        </nav>
        <Route
          path="/auth/signin"
          render={() => <SignInForm onSubmit={this.handleSignIn} />}
        />
        <Route
          path="/auth/signup"
          render={() => <SignUpForm onSubmit={this.handleSignUp} />}
        />
        {loading && <Loading />}
      </div>
    );
  }
}

export default connect(
  state => ({
    loading: state[moduleName].loading
  }),
  { signUp, signIn}
)(AuthPage);
