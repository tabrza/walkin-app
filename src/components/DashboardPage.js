import React, { Component } from 'react';
import Person from './Person';
import Form from './Form';
import { firebase, database } from '../firebase/firebase';

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.app = firebase;
    this.db = database.ref().child('persons');
  }
  state = {
    persons: []
  }

  componentWillMount() {
    const updatedList = [...this.state.persons];
    // DB snapshot
    this.db.on('child_added', (snap) => {
      updatedList.push({
        id: snap.key,
        name: snap.val().persons.name,
        waitTime: snap.val().persons.waitTime
      });

      this.setState({
        persons: updatedList
      });
    });
  }

  addPerson = (person) => {
    this.db.push().set({
      persons: person
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
