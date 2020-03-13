import React from 'react'
import Button from '../Button/Button'
import './form.css'
const Form = (props) => {
    
     return(
         <form onSubmit = {props.changehandler}>
         <input type = "text"  />
          <Button name = "submit" />
         </form>
     )

}

export default Form