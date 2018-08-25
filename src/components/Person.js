import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProgressBar from './ProgressBar';

class Person extends Component {
  removePersonHandler = (personId) => { // remove person from list if seated
    this.props.remove(personId);
  };

  render() {
    const hours = Math.floor(this.props.waitTime / 60);
    const minutes = Math.floor(this.props.waitTime % 60);
    let waitTime;
    if (this.props.waitTime < 2 && this.props.waitTime !== 0) {
      waitTime = `${minutes} minute`;
    } else if (this.props.waitTime > 60) {
      waitTime = `${hours} hour ${minutes} minutes`;
    } else if (this.props.waitTime < 60) {
      waitTime = `${minutes} minutes`;
    } else {
      waitTime = `${hours} hour`;
    }
    return (
      <div className="grey list-body">
        <div className="list-item">
          <p className=""><strong> { this.props.name } </strong></p>
          <p className=""><strong> { waitTime } </strong></p>
        </div>
        <div className="list-item">
          <ProgressBar
            waitTime={this.props.waitTime}
            origTime={this.props.origTime}
          />
          <button className="button " onClick={() => this.removePersonHandler(this.props.id)}>Seated</button>
        </div>
      </div>
    );
  }
}

// validating input
Person.propTypes = {
  remove: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  waitTime: PropTypes.number.isRequired,
  origTime: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired
};

export default Person;
