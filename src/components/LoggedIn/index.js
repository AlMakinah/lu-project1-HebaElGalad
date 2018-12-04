import React, { Component } from "react";
import PropTypes from "prop-types";
import Search from "../Search";
import ImageComponent from "../ImageComponent";

import Avatar from "../../images/card-img/credit-card-emoji.png";

class LoggedIn extends Component {
  static propTypes = {
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick: () => null
  };

  render() {
    return (
      <div className="logged-in clearfix">
        <a className="header__user" href="#" onClick={this.props.onClick}>
          <ImageComponent
            className="header__user-avatar"
            src={Avatar}
            alt="user avatar"
          />
        </a>
        <Search />
      </div>
    );
  }
}

export default LoggedIn;
