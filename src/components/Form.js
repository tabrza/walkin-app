import React, { Component } from 'react';

class Form extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    person: {
      name: '',
      waitTime: 0,
      origTime: 0
    }
  }

  // set the content to the value in the input box
  userInputHandler = (e) => {
    const newPerson = { ...this.state.person };
    newPerson[e.target.name] = e.target.value;
    if (e.target.name === 'waitTime') newPerson.origTime = e.target.value;
    this.setState({
      person: newPerson
    });
  };

  addPersonHandler = () => {
    this.props.addPerson(this.state.person);
    const resetPerson = { ...this.state.person };
    resetPerson.name = '';
    resetPerson.waitTime = 0;
    resetPerson.origTime = 0;
    // for (const prop of resetPerson.getOwnPropertyNames(obj)) {
    //   delete obj[prop];
    // }
    this.setState({
      person: resetPerson
    });
  };

  render() {
    return (
      <div className="input-group form">
        <input
          name="name"
          className="input-group__item text-input"
          placeholder="Name"
          value={this.state.person.name}
          onChange={this.userInputHandler}
        />
        <input
          name="waitTime"
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
