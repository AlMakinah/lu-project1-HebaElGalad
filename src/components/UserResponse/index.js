import React, { Component } from "react";
import ImageComponent from "../ImageComponent";
import ResponseBody from "../ResponseBody";
import ResponseFooter from "../ResponseFooter";

import Avatar from "../../images/card-img/credit-card-emoji.png";

class UserResponse extends Component {
  render() {
    return (
      <div className="responses__user-response">
        <a className="responses__user-profile" href="#">
          <ImageComponent
            className="responses__user-avatar media__img"
            src={Avatar}
            alt="user avatar"
          />
          <span className="responses__user-name heading__level-4 heading--bold">
            username
          </span>
        </a>
        <div className="media__content">
          <ResponseBody />
          <ResponseFooter />
        </div>
      </div>
    );
  }
}

export default UserResponse;
