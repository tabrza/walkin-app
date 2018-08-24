import React, { Component } from 'react';
import Person from './Person';
import Form from './Form';
import { firebase, database } from '../firebase/firebase';

class DashboardPage extends Component {
  constructor() {
    super();
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
        name: snap.val().person.name,
        waitTime: snap.val().person.waitTime,
        origTime: snap.val().person.origTime
      });

      this.setState({
        persons: updatedList
      });
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.updateTime(), 60000);
  }

  updateTime = () => {
    const list = [...this.state.persons];
    const updatedList = [];

    for (let i = 0; i < list.length; i += 1) {
      const person = list[i];
      let newTime = parseInt(person.waitTime, 10);
      // console.log('person in array',person);
      if (newTime > 0) {
        newTime -= 1;
      }

      const object = {
        id: person.id,
        name: person.name,
        waitTime: newTime,
        origTime: person.origTime
      };

      updatedList.push(object);

      // Write`/persons/${  person.id  }/person/`n the posts list and the user's post list.
      const updates = {};
      updates[`/persons/${person.id}/person/`] = object;

      firebase.database().ref().update(updates);
    }

    this.setState({
      persons: updatedList
    });
  }

  addPerson = (person) => {
    // console.log('person',person);
    this.db.push().set({
      person
    });
  };

  render() {
    // console.log('state',this.state.persons);
    const allPersons = this.state.persons.map(person => (
      // subtract person wait time with counter
      <Person
        key={person.id}
        name={person.name}
        waitTime={person.waitTime}
        origTime={person.origTime}
      />
    ));

    return (
      <div className="content-container">
        <Form addPerson={this.addPerson} />
        {allPersons}
      </div>
    );
  }
}

export default DashboardPage;
