import React, {Component} from 'react';
import styles from './Person.module.css';
import WithClass from '../../HOC/WithClass';
import Aux from '../../HOC/Auxilary';

 class Person extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
       // this.inputRef.current.focus();
    }

    focus() {
        this.inputRef.current.focus();
    }

     render() {
        return (
            <Aux>
                <p>Name : {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <div>
                    <label>New Name: </label>
                    <input ref = {this.inputRef} value = {this.props.name} onChange = {this.props.changeName}></input>
                </div>
                <button onClick = {this.props.deletePerson}>Delete</button>
            </Aux>
        )
     }
}
export default WithClass(Person, styles.person);