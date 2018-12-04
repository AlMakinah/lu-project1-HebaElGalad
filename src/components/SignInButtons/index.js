import React, { Component } from "react";
import Button from "../Button";

class SignInButtons extends Component {
  state = {};
  render() {
    return (
      <ul className="list signing__buttons">
        <li className="sign__up">
          <Button
            buttonClass="button button--block button--large button--primary"
            href="#">
            Sign up to continue
          </Button>
        </li>
        <li className="sign__in">
          <Button
            buttonClass="button button--block button--large button--secondary"
            href="#">
            or sign in
          </Button>
        </li>
      </ul>
    );
  }
}

export default SignInButtons;
