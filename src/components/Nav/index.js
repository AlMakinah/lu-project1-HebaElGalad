import React, { Component } from "react";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <ul className="list list--inline nav-bar__nav">
        <li className="nav__item">
          <a href="#">Dribbles</a>
        </li>
        <li className="nav__item">
          <a href="#">Buckets</a>
        </li>
        <li className="nav__item">
          <a href="#">Users</a>
        </li>
        <li className="nav__item">
          <a href="#">Lists</a>
        </li>
      </ul>
    );
  }
}

export default Navigation;
