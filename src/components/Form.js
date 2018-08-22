import React, { Component } from 'react';

class Form extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    person: {
      name: '',
      waitTime: ''
    }
  }

  // set the content to the value in the input box
  userInputHandler = (e) => {
    const newPerson = { ...this.state.person };
    newPerson.name = e.target.value;

    this.setState({
      person: newPerson
    });
  };

  addPersonHandler = () => {
    this.props.addPerson(this.state.person);
    const resetPerson = { ...this.state.person };
    resetPerson.name = '';
    resetPerson.waitTime = '';
    // for (const prop of Object.getOwnPropertyNames(obj)) {
    //   delete obj[prop];
    // }
    this.setState({
      person: resetPerson
    });
  };

  render() {
    return (
      <div className="input-group content-container">
        <input
          className="input-group__item text-input"
          placeholder="Name"
          value={this.state.person.name}
          onChange={this.userInputHandler}
        />
        <input
          className="input-group__item text-input"
          placeholder="Wait Time"
          value={this.state.person.time}
          onChange={this.userInputHandler}
        />
        <button className="button" onClick={this.addPersonHandler}>Save</button>
      </div>
    );
  }
}


export default Form;
