import React from 'react';
import styles from './Person.module.css';

 const person = (props) => {
    return (
        <div className = {styles.person}>
            <p>Name : {props.name}</p>
            <p>Age: {props.age}</p>
            <div>
                <label>New Name: </label>
                <input value = {props.name} onChange = {props.changeName}></input>
            </div>
            <button onClick = {props.deletePerson}>Delete</button>
        </div>
    )
}
export default person;