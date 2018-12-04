import React, { Component } from "react";
import CardActions from "../CardActions";
import CardInfo from "../CardInfo";
import ImageComponent from "../ImageComponent";
import UserInfo from "../UserInfo";
import CardDetails from "../CardDetails";
import Modal from "../Modal";

import BrownBear from "../../images/card-img/brown-bear.png";

class Card extends Component {
  state = {
    modalVisibility: false
  };

  render() {
    const { modalVisibility } = this.state;

    return (
      <div className="col">
        <li className="dribble__container">
          <div className="dribble__card">
            <a
              className="dribble__card-action"
              href="#"
              onClick={() =>
                this.setState({
                  modalVisibility: true
                })
              }>
              <ImageComponent
                className="dribble__img"
                src={BrownBear}
                alt="Brown bear"
              />
              {modalVisibility && (
                <Modal
                  overlayCloses={true}
                  closeButton={true}
                  onClose={() =>
                    this.setState({
                      modalVisibility: false
                    })
                  }>
                  <CardDetails />
                </Modal>
              )}
            </a>
            <CardInfo />
            <div className="clearfix">
              <CardActions />
            </div>
          </div>
          <UserInfo href="#" />
        </li>
      </div>
    );
  }
}

export default Card;
