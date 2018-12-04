import React from "react";
import ImageComponent from "../ImageComponent";

import Avatar from "../../images/card-img/credit-card-emoji.png";

const CardDetailsHeader = () => {
  return (
    <header className="card-details__header clearfix">
      <div className="card-details__header__title-container">
        <ImageComponent
          className="card-details__header__user-avatar media__img"
          src={Avatar}
          alt="user avatar"
        />
        <div className="media__content">
          <h1 className="card-details__header__title heading__level-3">
            Pay Junction - Paper Receipts{" "}
          </h1>
          <p className="card-details__header__subtitle text--small">
            by{" "}
            <a
              className="card-details__header__user-name button button--secondary heading__level-4 heading--bold"
              href="#">
              Eddie Lobanivsjky{" "}
            </a>
            on{" "}
            <time className="card-details__header__time" dateTime="2018-08-20">
              August 20, 2018
            </time>
          </p>
        </div>
      </div>
      <div className="card-details__header__actions">
        <button className="button__save button button--outline" type="button">
          Save
        </button>
        <button className="button__like button button--outline" type="button">
          Like
        </button>
      </div>
    </header>
  );
};

export default CardDetailsHeader;
