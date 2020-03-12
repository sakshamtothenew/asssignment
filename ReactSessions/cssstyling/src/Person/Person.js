import React , {Component} from 'react' 

import './Person.css'

class Person extends Component {

    render (){

        return (
            <div className = "person-card">
                <p onClick = {this.props.click}>i am {this.props.name} my age is {this.props.age}</p>
                <input onChange = {this.props.changed}type = "text" value = {this.props.name}/>
            </div>
        )
    }

     
    
}


export default Person 
