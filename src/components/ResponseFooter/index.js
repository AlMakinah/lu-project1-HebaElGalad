import React from "react";

const ResponseFooter = () => {
  return (
    <footer className="responses__user-response-footer clearfix">
      <p className="responses__user-response-time heading__level-5">
        <time dateTime="2018-08-20">August 20, 2018</time>
      </p>
      <button
        className="responses__user-response-like button button--secondary"
        type="button">
        12
      </button>
    </footer>
  );
};

export default ResponseFooter;
