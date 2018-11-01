import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        this.lastInputRef = React.createRef();
    }

    componentDidMount() {
        this.lastInputRef.current.focus();
    }

    render() {
        return this.props.persons.map((person, index) => {
            return <Person ref = {this.lastInputRef} index = {index} deletePerson = {() => this.props.deletePerson(person.id)} key= {person.id} changeName={(event) => this.props.changeName(event, person.id)} name={person.name} age={person.age} >
            </Person>
          })
    }
    
}

export default Persons;