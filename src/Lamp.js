import React, {Component} from 'react';

class Lamp extends Component {
  // Thanks to those following lines, 
  // the lamp rendering now depends on the state, 
  // and not on the props any more
  constructor(props) {
    super(props);
    this.state = {
      on: this.props.on
    };
  }
  // There we can modify the state of the lamp thanks to setState
  handleClick = () => {
    this.setState({ on: !this.state.on });
  };
  render() {
    const light = this.state.on ? 'on': 'off';
    return (
      <div className="Lamp">
        {/* button represents the switch */}
        {/* the onClick property has for value a method */}
        <button className={light} onClick={this.handleClick}>
            {light.toUpperCase()}
        </button>   
        {/* figure represents the bulb */}
        <figure className={light} />
      </div>
    );
  }
}

export default Lamp;