import React, { Component } from "react";

class CardDetailsActions extends Component {
  state = {};
  render() {
    return (
      <div className="card-details__body__actions">
        <div className="clearfix">
          <a
            className="card-details__body__copy-link button button--outline"
            href="#">
            {" "}
            <span> Copy Link</span>
          </a>
        </div>
        <ul className="body__actions__list list">
          <li className="body__actions__view heading__level-5">
            <span className="body__actions__count"> 6124 Views</span>
          </li>
          <li className="body__actions__like heading__level-5">
            <a className="hover" href="#">
              <span className="body__actions__count"> 1232 likes</span>
            </a>
          </li>
          <li className="body__actions__save heading__level-5">
            <a className="hover" href="#">
              <span className="body__actions__count"> 23 saves</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CardDetailsActions;
