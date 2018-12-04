import React, { Component } from "react";

class CardActions extends Component {
  state = {};
  render() {
    return (
      <ul className="list list--inline dribble__actions">
        <li className="dribble__view heading__level-5">
          <span className="visually-hidden">Views</span>
          <span className="dribble__action-count">4234</span>
          <span className="visually-hidden">times</span>
        </li>
        <li className="dribble__comment heading__level-5">
          <span className="visually-hidden">Comment</span>
          <span className="dribble__action-count">23</span>
          <span className="visually-hidden">times</span>
        </li>
        <li className="dribble__like heading__level-5">
          <a href="#">
            <span className="visually-hidden">Like</span>
            <span className="dribble__action-count">3</span>
            <span className="visually-hidden">times</span>
          </a>
        </li>
      </ul>
    );
  }
}

export default CardActions;
