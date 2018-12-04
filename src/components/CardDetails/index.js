import React, { Component } from "react";
import CardDetailsHeader from "../CardDetailsHeader";
import CardDetailsBody from "../CardDetailsBody";
import ImageComponent from "../ImageComponent";

import TwoDeers from "../../images/card-img/two-deers.png";

class CardDetails extends Component {
  render() {
    return (
      <div className="card-details__container">
        <CardDetailsHeader />
        <div className="card-details__img">
          <ImageComponent src={TwoDeers} alt="two deers" />
        </div>
        <CardDetailsBody />
      </div>
    );
  }
}

export default CardDetails;
