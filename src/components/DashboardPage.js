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
        name: snap.val().person.name,
        waitTime: snap.val().person.waitTime
      });

      this.setState({
        persons: updatedList
      });
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.timer(), 60000);
  }

  timer = () => {
    const list = [...this.state.persons];
    const dbArray = [];
    for (let i = 0; i < list.length; i += 1) {
      const person = list[i];
      if (person.waitTime > 0) {
        person.waitTime -= 1;
      }

      const object = {};
      object[person.id] = {
        name: person.name,
        waitTime: person.waitTime
      };

      dbArray.push(object);
    }

    this.db.set({
      person: dbArray
    });

    this.setState({
      persons: list
    });
  }

  addPerson = (person) => {
    this.db.push().set({
      person
    });
  };

  render() {
    // console.log('state',this.state.persons);
    const allPersons = this.state.persons.map(person => (
      // subtract person wait time with counter
      <Person key={person.id} name={person.name} time={person.waitTime} />
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
