import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [{ name: 'Jugal', age: 30 },
    { name: 'Temp', age: 30 },
    { name: 'Temp2', age: 30 }]
  };

  changeState = () => {
    this.setState({
      persons: [{ name: `JKJ${Math.floor(Math.random() * 30)}`, age: 30 },
      { name: 'Temp', age: 30 },
      { name: 'Temp2', age: 30 }]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Persons
        </header>
        <ul>
          <Person changeName = {this.changeState} name={this.state.persons[0].name} age={this.state.persons[0].age} ></Person>
          <Person changeName = {this.changeState} name={this.state.persons[1].name} age={this.state.persons[1].age} ></Person>
          <Person changeName = {this.changeName} name={this.state.persons[2].name} age={this.state.persons[2].age} ></Person>
        </ul>

        <button onClick={this.changeState}>Change Name</button>
      </div>
    );
  }
}

export default App;
