import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from './../components/Persons/Persons';
import Header from '../components/Header/Header';

class App extends Component {
  state = {
    persons: [{ id: 12, name: 'Jugal', age: 30 },
    { id: 13, name: 'Temp', age: 30 },
    { id: 14, name: 'Temp2', age: 30 }],
    showPersons: true
  };

  changeName = (event, id) => {
    const newName = event.target.value;
    const personIndex = this.state.persons.findIndex((person) => person.id === id);
    let person = this.state.persons[personIndex];
    const newPerson = { ...person, name: newName };
    const newPersons = [...this.state.persons];
    newPersons[personIndex] = newPerson;
    this.setState({
      persons: newPersons
    });
  }

  deletePerson = (id) => {
    const personIndex = this.state.persons.findIndex((person) => person.id === id);
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({
      persons: newPersons
    });
  }

  togglePersons = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} deletePerson={this.deletePerson} changeName={this.changeName} >
      </Persons>
    }

    return (
      <div className={styles.App} >
        <Header persons = {this.state.persons} togglePersons = {this.togglePersons}></Header>
        {persons}
      </div>
    );
  }
}

export default App;
