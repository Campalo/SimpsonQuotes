import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";

class MyLogo extends Component {
  // Thanks to those following lines,
  // the logo rendering now depends on the state,
  // and not on the props any more
  constructor(props) {
    super(props);
    this.state = {
      working: this.props.working
    };
  }
  // There we can modify the state of the logo thanks to setState
  handleClick = () => {
    this.setState({ working: !this.state.working });
    console.log("Button Clicked");
  };
  render() {
    const homerDoing = this.state.working
      ? "logo whishes to have a break. Click!"
      : "Logo is eager to work. Click!";
    const logoDoing = this.state.working ? "App-logo" : "App-logo-stop";

    return (
      <div className="My-column">
        <img src={logo} className={logoDoing} alt="React logo" />
        <button
          className={homerDoing}
          className="My-button"
          onClick={this.handleClick.bind(this)}
        >
          {homerDoing.toLowerCase()}
        </button>
      </div>
    );
  }
}

export default MyLogo;
