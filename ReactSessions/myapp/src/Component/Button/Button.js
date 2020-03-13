import React from 'react';

import './button.css'
const button = (props) => {
    return( <button onClick = {props.click} className ={props.classname}>{props.name}</button>)
}

export default button