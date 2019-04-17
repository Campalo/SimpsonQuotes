import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lamp from "./Lamp";

import Quotes from "./Quotes";

class App extends Component {
  render() {   
    // render() method is used to render some html to the DOM and so to the screen
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Lamp on/>
        <Lamp />
        <Quotes></Quotes>
      </div>
    );
  }
}

export default App;
