import React, { Component } from 'react'
import Button from '../Button/Button'
import './Todo.css'

class Todo extends Component {



    render() {
      
        return (
            <div className="Wrapper">
                <div className="todo">
                    <div className="title">{this.props.task}</div>
                    <div className="quantity">{this.props.quantity}</div>
                </div>
                <Button classname="delbtn" name="Delete" click={() => this.props.deletetask(this.props.index)} />
                <Button classname="editbtn" name="Edit" click={(event) => this.props.edittask(event , this.props.index)} />
            </div>

        )
    }
}

export default Todo