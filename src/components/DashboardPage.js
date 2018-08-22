import React, { Component } from 'react';
import Person from './Person';
import Form from './Form';

class DashboardPage extends Component {
  state = {
    persons: [
      { id: 1, name: 'Person1', waitTime: 10 },
      { id: 2, name: 'Person2', waitTime: 20 }
    ]
  }

  addPerson = (person) => {
    const newList = [...this.state.persons];
    newList.push(person);
    this.setState({
      persons: newList
    });
  };

  render() {
    const allPersons = this.state.persons.map(person => (
      <Person key={person.id} name={person.name} time={person.waitTime} />
    ));

    return (
      <div>
        <Form addPerson={this.addPerson} />
        {allPersons}
      </div>
    );
  }
}

export default DashboardPage;
