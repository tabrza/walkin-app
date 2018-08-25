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
    this.db.on('child_added', (snap) => {
      const updatedList = [...this.state.persons];
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

    this.db.on('child_removed', (snap) => {
      const updatedList = [...this.state.persons];
      for (let i = 0; i < updatedList.length; i += 1) {
        const person = updatedList[i];
        if (person.id === snap.key) {
          updatedList.splice(i, 1);
        }
      }

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

      const updates = {};
      updates[`/persons/${person.id}/person/`] = object;

      firebase.database().ref().update(updates);
    }

    this.setState({
      persons: updatedList
    });
  }

  addPerson = (person) => {
    this.db.push().set({
      person
    });
  };

  removePerson = (personId) => {
    this.db.child(personId).remove();
  };

  render() {
    let allPersons = this.state.persons.map(person => (
      <Person
        key={person.id}
        id={person.id}
        name={person.name}
        waitTime={person.waitTime}
        origTime={person.origTime}
        remove={this.removePerson}
      />
    ));

    if (this.state.persons.length === 0) {
      allPersons = <p className="text-input">Please add people to your wait list</p>;
    }

    return (
      <div className="background">
        <div className="content-container container">
          <Form addPerson={this.addPerson} />
        </div>
        <div className="content-container container">
          {allPersons}
        </div>
      </div>
    );
  }
}

export default DashboardPage;
