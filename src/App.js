import React, { Component } from "react";
import "./App.css";
import Logo from "./Logo";

import Quotes from "./Quotes";
import Lamp from "./Lamp";
import NameForm from "./Form";

class App extends Component {
  render() {
    // render() method is used to render some html to the DOM and so to the screen
    return (
      <div className="App">
        <header className="App-header">
          <Logo />
          <h1 className="App-title">Simpsons Quotes</h1>
          <NameForm />
        </header>
        <Quotes />
        <Lamp />
      </div>
    );
  }
}

export default App;
