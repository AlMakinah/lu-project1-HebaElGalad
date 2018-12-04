import React, { Component } from "react";
import CardDetailsDescription from "../CardDetailsDescription";
import CardDetailsActions from "../CardDetailsActions";
import UserResponse from "../UserResponse";

class CardDetailsBody extends Component {
  state = {};
  render() {
    return (
      <section className="card-details__body clearfix">
        <CardDetailsDescription />
        <CardDetailsActions />
        <div className="card-details__responses">
          <header className="responses__header">
            <h2 className="responses__title heading__level-3">Responses</h2>
          </header>
          <section className="responses__body">
            <UserResponse />
            <UserResponse />
          </section>
        </div>
      </section>
    );
  }
}

export default CardDetailsBody;
