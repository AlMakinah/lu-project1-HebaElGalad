import React, { Component } from "react";

class Search extends Component {
  state = {};
  render() {
    return (
      <form className="header__search clearfix" onSubmit={this.submit}>
        <label className="visually-hidden header__search__label" for="search">
          search
        </label>
        <input
          className="header__search__input"
          type="text"
          id="search"
          placeholder="Search..."
        />
        <button className="header__search__button" type="submit">
          <span className="visually-hidden">Search</span>
        </button>
      </form>
    );
  }
}

export default Search;
