import React, { Component } from 'react';
import Todo from './Component/Todo/Todo'
import Form from './Component/Form/form'
import './App.css';

class App extends Component {
  state = {
    list: []
  }

  updatelist = () => {
  
   
  }


  deletetask = (i) => {

    console.log(i);
    const index = this.state.list.findIndex((l) => l.id === i);
    console.log(index);
    let newlist = [...this.state.list];
    newlist.splice(index, 1);
    this.setState({
      list: newlist
    })
  }
  
   changehandler = (event) => {
     event.preventDefault()
     console.log(event)
    const inputval = event.target[0].value;
    
     if(inputval == "")
     {
       alert('please enter something');
     }
     else {
      let seg = inputval.split('-');

        event.target[0].value = "";;
      let newlist = [...this.state.list];
      newlist.push({ id: Date.now(), task: seg[0], quantity: seg[1] })
  
      this.setState({
        list: newlist
      })
     }
   

}

  render() {

    let tasks = (

      this.state.list.map((item, index) => {

        return <Todo deletetask={this.deletetask} task={item.task} index={item.id} quantity={item.quantity} />
      })
    )
    return (
      <div className="app">
    <Form changehandler = {this.changehandler} />
        {tasks}
      </div>
    )
  }
}

export default App;
