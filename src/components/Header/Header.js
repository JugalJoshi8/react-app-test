import React from 'react';
import styles from './Header.module.css'

const Header = (props) => {
    let buttonClass = [];
    if (props.persons.length < 3) {
        buttonClass.push(styles.red);
    }
    if (props.persons.length < 2) {
        buttonClass.push(styles.bold);
    }
    return (
        <div>
            <header className="App-header">
                Persons
             </header>
            <button className={buttonClass.join(' ')} onClick={props.togglePersons}>Show / Hide Persons</button>
        </div>
    )
}

export default Header;