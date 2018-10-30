import React from 'react';
import './Person.css';

 const person = (props) => {
    return (
        <div className = 'person'>
            <p onClick = {props.changeName} >Name : {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}
export default person;