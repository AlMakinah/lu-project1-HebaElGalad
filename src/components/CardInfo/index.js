import React, { Component } from "react";

class CardInfo extends Component {
  render() {
    return (
      <div className="card-info">
        <header className="card-info__header">
          <h1 className="card-info__title heading__level-3">Dribble title</h1>
        </header>
        <section className="card-info__body">
          <p className="card-info__text heading__level-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            libero nihil deserunt. Assumenda minus accusamus nostrum. Non
            exercitationem natus tenetur, repudiandae voluptatem quod odit iste
            quos, eius esse, possimus delectus.
          </p>
        </section>
        <footer className="card-info__footer">
          <p className="card__publish-time heading__level-5">
            <time dateTime="2018-08-30">August 30, 2018</time>
          </p>
        </footer>
      </div>
    );
  }
}

export default CardInfo;
