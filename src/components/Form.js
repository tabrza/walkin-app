import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    person: {
      name: '',
      waitTime: '',
      origTime: null
    }
  }

  // set the content to the value in the input box
  userInputHandler = (e) => {
    const newPerson = { ...this.state.person };
    // update values depending on input value
    if (e.target.name === 'waitTime' && e.target.validity.valid) {
      const time = parseInt(e.target.value, 10);
      newPerson.origTime = time;
      newPerson.waitTime = time;
    } else if (e.target.name === 'name') {
      newPerson.name = e.target.value;
    }

    this.setState({
      person: newPerson
    });
  };

  addPersonHandler = () => { // clear state and add person prop function to db
    this.props.addPerson(this.state.person);
    const resetPerson = { ...this.state.person };
    resetPerson.name = '';
    resetPerson.waitTime = '';

    this.setState({
      person: resetPerson
    });
  };

  render() {
    return (
      <div className="form">
        <div className="input-group ">
          <input
            name="name"
            type="text"
            className="text-input margin-right"
            placeholder="Name"
            value={this.state.person.name}
            onChange={this.userInputHandler}
          />
          <input
            name="waitTime"
            type="text"
            pattern="[0-9]*"
            className="text-input"
            placeholder="Wait Time"
            value={this.state.person.waitTime}
            onChange={this.userInputHandler}
          />
        </div>
        <button className="button" onClick={this.addPersonHandler}>Save</button>
      </div>
    );
  }
}

// validating input
Form.propTypes = {
  addPerson: PropTypes.func.isRequired
};

export default Form;
