import React, { Component } from 'react'
import Button from '../Button/Button'
import './form.css'
class Form extends Component {

  
    render() {
        
       
        return(
            <form className="form" onSubmit = {this.props.editing ? (event) =>this.props.editingcurrtask(event , this.props.index) : this.props.changehandler}>
            <input placeholder ="Fruit-Quantity"
             className = "inputfield" 
             type = "text" 
               value = {this.props.value}
              onChange ={ this.props.d}
             />
             <Button classname = {this.props.editing ? "editbtn": "btn"} name ={this.props.editing ? "Edit" : "Submit"} />
            </form>
        )
   
    }
    
}

export default Form