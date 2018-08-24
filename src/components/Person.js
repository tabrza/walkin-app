import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Person extends Component {

  removePersonHandler = (personId) => {
    console.log(personId);
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

export default Person;
