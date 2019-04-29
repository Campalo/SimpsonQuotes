import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Homer Simpson" };
  }

  // update the name in the form based on the new user input
  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <form className="My-form">
        <label htmlFor="name">Name :</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange} 
        />
      </form>
    );
  }
}

export default NameForm;
