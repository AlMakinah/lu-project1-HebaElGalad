import React, { Component } from "react";
import PropTypes from "prop-types";

class SignInNav extends Component {
  static propTypes = {
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick: () => null
  };

  render() {
    return (
      <ul className="list list--inline header__user-nav">
        <li className="user-nav__item">
          <a href="#" onClick={this.props.onClick}>
            Sign in
          </a>
        </li>
        <li className="user-nav__item">
          <a href="#">Sign up</a>
        </li>
      </ul>
    );
  }
}

export default SignInNav;
