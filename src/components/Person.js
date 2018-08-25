import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProgressBar from './ProgressBar';

class Person extends Component {
  removePersonHandler = (personId) => {
    this.props.remove(personId);
  };

  render() {
    return (

          <div className="">
            <p className=""><strong> { this.props.name } </strong></p>
            <p className=""><strong> { this.props.waitTime } </strong></p>
              <ProgressBar waitTime={this.props.waitTime} origTime={this.props.origTime} />
            <button className="button" onClick={() => this.removePersonHandler(this.props.id)}>Seated</button>
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
