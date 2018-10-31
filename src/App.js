import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';

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
    const newPerson = {...person, name: newName};
    const newPersons = [...this.state.persons];
    newPersons[personIndex] = newPerson;
    this.setState({
      persons: newPersons
    });
  }

  deletePerson(id) {
    const personIndex = this.state.persons.findIndex((person) => person.id === id);
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({
      persons: newPersons
    });
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = this.state.persons.map((person) => {
        return <Person deletePerson = {() => this.deletePerson(person.id)} key= {person.id} changeName={(event) => this.changeName(event, person.id)} name={person.name} age={person.age} >
        </Person>
      })
    }

    let buttonClass = [];
    if(this.state.persons.length < 3) {
      buttonClass.push(styles.red);
    }
    if(this.state.persons.length < 2) {
      buttonClass.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <header className="App-header">
          Persons
        </header>
        <button className = {buttonClass.join(' ')} onClick={() => { this.setState({ showPersons: !this.state.showPersons }) }}>Show / Hide Persons</button>
        <ul>
          {persons}
        </ul>
        <button onClick={this.changeState}>Change Name</button>
      </div>
    );
  }
}

export default App;
