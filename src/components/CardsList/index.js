import React, { Component } from "react";
import Card from "../Card";

class CardsList extends Component {
  render() {
    const { cards } = this.props;
    return (
      <ul className="list list--inline">
        <div className="row row--4">
          {Array.from(Array(cards)).map((x, index) => (
            <Card key={index} />
          ))}
        </div>
      </ul>
    );
  }
}

export default CardsList;
