import React from "react";
import ImageComponent from "../ImageComponent";

import ImageLogo from "../../images/logo-rectangle.png";

const Logo = () => {
  return (
    <h1>
      <a href="index.html">
        <ImageComponent
          className="dribble__logo"
          src={ImageLogo}
          alt="dribbles"
        />
        <span className="visually-hidden">Dribbles</span>
      </a>
    </h1>
  );
};

export default Logo;
