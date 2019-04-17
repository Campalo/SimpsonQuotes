import React, {Component} from 'react';

class Lamp extends Component {
  render() {
    const light = this.props.on ? 'on': 'off';
    return (
      <div className="Lamp">
        {/* button represents the switch */}
        <button className={light}>{light.toUpperCase()}</button>   
        {/* figure represents the bulb */}
        <figure className={light} />
      </div>
    );
  }
}

export default Lamp;