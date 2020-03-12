import React, { Component } from 'react';
import Todo from './Component/Todo/Todo'
import Button from './Component/Button/Button'
import './App.css';

class App extends Component {
  state = {
    list: []
  }

  updatelist = () => {
    let inputval = document.getElementsByClassName('inputtask')[0].value;

    let seg = inputval.split('-');

    document.getElementsByClassName('inputtask')[0].value = "";
    let newlist = [...this.state.list];
    newlist.push({ id: Date.now(), task: seg[0], quantity: seg[1] })

    this.setState({
      list: newlist
    })
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



  render() {

    let tasks = (

      this.state.list.map((item, index) => {

        return <Todo deletetask={this.deletetask} task={item.task} index={item.id} quantity={item.quantity} />
      })
    )
    return (
      <div className="app">
        <input className="inputtask" />
        <Button name="Submit" click={this.updatelist} />
        {tasks}
      </div>
    )
  }
}

export default App;
