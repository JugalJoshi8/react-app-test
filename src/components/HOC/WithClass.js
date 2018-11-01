import React from 'react';

const withClass = (WrappedComponent, className)=> {
    const WithClass =  (props) =>  {
        return (<div className = {className}>
                <WrappedComponent {...props} ref = {props.forwardRef}></WrappedComponent>
            </div>)
    };

    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardRef = {ref}/>
    });

}



export default withClass;