import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css'

class App extends Component {

  state = {
    person: [{ id: 'asdadf', name: "saksham", age: 20 },
    { id: 'sadk', name: "ritika", age: 30 },
    { id: 'sfdsf', name: "sakshi", age: 50 }
    ],
    otherState: "some other value",
    showPerson:  true

  }



  
  deletePersonhandler = (id) => {
    let personid  =  this.state.person.findIndex((p) => p.id === id)

     let persons = [...this.state.person];
     persons.splice(personid , 1);

     this.setState({
        person : persons
     })
  }



  togglePersonhandler = () => {
    let status = this.state.showPerson;
      this.setState({showPerson : !status})
  }



  namechangedhandler = (event , id) => {

    let index =  this.state.person.findIndex((p)=> p.id === id)

    let person = {...this.state.person[index]}
     person.name  = event.target.value;


     let persons = [...this.state.person]
     persons[index] = person;
     this.setState({
       person : persons
     })


  }

  render() {

    let persons = this.state.showPerson ?

      (this.state.person.map((p) => {
        return <Person  
        changed = {(event) => this.namechangedhandler(event ,p.id )}
         click = {() => this.deletePersonhandler(p.id)} 
         name={p.name}
          key={p.id} 
          age={p.age} />
      })
      ) : null



    return (

      <div className="App">
        <h1>This is React App!!</h1>
         <button onClick = {() => this.togglePersonhandler()}className = "btn">Toggle button</button>
        {persons}
      </div>
    )
  }

}
export default App;
