import React, { Component } from 'react';
import Todo from './Component/Todo/Todo'
import Form from './Component/Form/form'
import './App.css';

class App extends Component {
  state = {
    list: [] , 
  
     editmode : false 
  }


  d = (event) => {
    this.setState({inputval : event.target.value})
  }
  edittask = (event , i) => {
    const index = this.state.list.findIndex((l) => l.id === i);
  

     const editmode = this.state.editmode;
     this.setState({
       inputval :  this.state.list[index].task + "-" + this.state.list[index].quantity,
        editmode : !editmode , 
        currindex : i
     })
    

  }

  editingcurrtask = (event , i) => {
    event.preventDefault()
    const index = this.state.list.findIndex((l) => l.id === i);
    console.log(index)
    const list = [...this.state.list];
    console.log(list);
    const  inputval  = event.target[0].value;
    event.target[0].value = "";
    const seg = inputval.split('-');
    list[index].task = seg[0] ;
    
    list[index].quantity = seg[1];
    const editmode = this.state.editmode
    this.setState({
      list : list , 
       editmode : !editmode
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

  changehandler = (event) => {
    event.preventDefault()
    console.log(event)
    const inputval = event.target[0].value;

    if (inputval == "") {
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

        return <Todo
          toedit={this.state.list[index]}
      
          edittask={this.edittask}
          deletetask={this.deletetask}
          task={item.task}
          index={item.id}
          quantity={item.quantity} />
      })
    )
    return (
      <div className="app">
        <h1 className="heading">Fruits App</h1>
        <Form value={this.state.inputval}
        index = {this.state.currindex}
        d = {this.d}
         editingcurrtask = {this.editingcurrtask}
          changehandler={this.changehandler}
           editing = {this.state.editmode}
             />
        {tasks}

      </div>
    )
  }
}

export default App;
