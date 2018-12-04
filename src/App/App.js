import React, { Component } from "react";
import Header from "../components/Header";
import PageTitle from "../components/PageTitle";
import CardsList from "../components/CardsList";
import SignInButtons from "../components/SignInButtons";
import Footer from "../components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <div className="container">
            <PageTitle />
            <section>
              <CardsList cards={20} />
            </section>
            <div className="row row--2">
              <div className="col offset--3">
                <section>
                  <SignInButtons />
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
