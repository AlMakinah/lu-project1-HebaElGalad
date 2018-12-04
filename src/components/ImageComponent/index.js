import React from "react";

const ImageComponent = (props) => {
  return <img className={props.className} src={props.src} alt={props.alt} />;
};

export default ImageComponent;
