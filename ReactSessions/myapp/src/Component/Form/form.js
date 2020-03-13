import React from 'react'
import Button from '../Button/Button'
import './form.css'
const Form = (props) => {
    
     return(
         <form className="form" onSubmit = {props.changehandler}>
         <input placeholder ="Fruit-Quantity" className = "inputfield" type = "text"  />
          <Button classname = "btn" name = "submit" />
         </form>
     )

}

export default Form