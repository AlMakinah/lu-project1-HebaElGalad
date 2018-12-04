import React, { Component } from "react";
import Logo from "../Logo";
import Navigation from "../Nav";
import LoggedIn from "../LoggedIn";
import SignInNav from "../SignInNav";

class Header extends Component {
  state = {
    logIn: false
  };

  toggleLogIn = () => {
    this.setState({
      logIn: !this.state.logIn
    });
  };

  render() {
    const { logIn } = this.state;
    return (
      <header className="header">
        <div className="container">
          <nav className="header__nav-bar">
            <div className="row row--3">
              <div className="col col--2">
                <Logo />
                <Navigation />
              </div>
              <div className="col clearfix">
                {logIn ? (
                  <LoggedIn onClick={this.toggleLogIn} />
                ) : (
                  <SignInNav onClick={this.toggleLogIn} />
                )}
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
