import React from "react";
import ImageComponent from "../ImageComponent";

import Avatar from "../../images/card-img/credit-card-emoji.png";

const UserInfo = (props) => {
  return (
    <a className="dribble__user" href={props.href}>
      <ImageComponent
        className="dribble__user-avatar"
        src={Avatar}
        alt="user avatar"
      />
      <span className="dribble__user-name heading__level-4 heading--bold">
        somename
      </span>
    </a>
  );
};

export default UserInfo;
