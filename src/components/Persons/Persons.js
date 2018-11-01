import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    return props.persons.map((person) => {
        return <Person deletePerson = {() => props.deletePerson(person.id)} key= {person.id} changeName={(event) => props.changeName(event, person.id)} name={person.name} age={person.age} >
        </Person>
      })
}

export default persons;