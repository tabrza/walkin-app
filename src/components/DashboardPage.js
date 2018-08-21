import React, { Component } from 'react';
import Person from './Person';

class DashboardPage extends Component {
  state = {
    persons: [
      { id: 1, name: 'Person1', waitTime: 10 },
      { id: 2, name: 'Person2', waitTime: 20 }
    ]
  }

  render() {
    const allPersons = this.state.persons.map(person => (
      <Person key={person.id} name={person.name} time={person.waitTime} />
    ));

    return (
      <div>
        {allPersons}
      </div>
    );
  }
}

export default DashboardPage;
