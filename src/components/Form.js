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

  addPersonHandler = () => {
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
      <div className="input-group form">
        <input
          name="name"
          type="text"
          className="input-group__item text-input"
          placeholder="Name"
          value={this.state.person.name}
          onChange={this.userInputHandler}
        />
        <input
          name="waitTime"
          type="text"
          pattern="[0-9]*"
          className="input-group__item text-input"
          placeholder="Wait Time"
          value={this.state.person.waitTime}
          onChange={this.userInputHandler}
        />
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
