import React from 'react';
import Task from "./Data"
import TodoList from "./components/TodoComponents/TodoList"
import TodoForm from './components/TodoComponents/TodoForm';


class App extends React.Component {
  // you will need a place to store your state in this component.
    constructor(){
      super()
      this.state = {
        task: Task,
      }
    }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any 
  //change handlers you need to work with your state
  addItem = newItemName => {
    
    const newItem = {
      task: newItemName,
      id: Date.now(),
      completed: false
    }

    this.setState({
      task: [...this.state.task, newItem]
    })

  }

  toggle = task => {
    this.setState({task: this.state.task.map(item =>{
      // console.log(item)
      if (item.task === task){
        return {
          ...item,
          completed: !item.completed
        }
      }else{
          return item
        }
    })})
  } 

  removeItem = task => {
      this.setState({task: this.state.task.filter(item => {
      if (item.completed === false){
        return item
      }
    })})
  }

  render() {
    return (
      <div>
        <h2>My Todo List</h2>
        <p><TodoList toggle = {this.toggle} tasks = {this.state.task} /></p>
        <p><TodoForm removeItem = {this.removeItem} addItem = {this.addItem}/></p>
      </div>
    );
  }
}

export default App;
