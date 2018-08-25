import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProgressBar from './ProgressBar';

class Person extends Component {
  removePersonHandler = (personId) => {
    this.props.remove(personId);
  };

  render() {
    return (
      <div className="list-header">
        <div className="list-body">
          <div className="list-item">
            <p className=""><strong> { this.props.name } </strong></p>
            <p className=""><strong> { this.props.waitTime } </strong></p>
            <div className="list-item__data">
              <ProgressBar waitTime={this.props.waitTime} origTime={this.props.origTime} />
            </div>
            <button className="button" onClick={() => this.removePersonHandler(this.props.id)}>Seated</button>
          </div>
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
