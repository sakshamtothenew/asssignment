import React from 'react';

import './button.css'
const button = (props) => {
    return( <button onClick = {props.click} className ="btn">{props.name}</button>)
}

export default button