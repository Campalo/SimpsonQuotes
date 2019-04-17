import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quotes from "./Quotes";
import Lamp from "./Lamp";
import MyLogo from "./Logo";


class App extends Component {
  render() {   
    // render() method is used to render some html to the DOM and so to the screen
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simpsons Quotes</h1>
          <MyLogo working />
        </header>
        <Lamp on/>
        <Lamp />
        <Quotes/>
      </div>
    );
  }
}

export default App;
