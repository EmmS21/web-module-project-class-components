import React from 'react'
import Todo from './Todo'
import Form from './Form'
import TodoList from './TodoList'



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Testing A line',
          id: 1243434,
          completed: false
        },
        {
          task: 'Catching Fish',
          id: 14545,
          completed: true
        },
      ]
    }
  }
  submitAdd = (newTask) => {
    
    const newAdd = {
      task: newTask,
      id: 2323,
      completed: false,
    };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newAdd]
    })
  }

  clearInput = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });
  }

  toggle = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo=> {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        } 
        return todo;
      })
    })
  }


  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos</h1>
        
        <TodoList toggle={this.toggle} todos={todos} />
        <Form submitAdd={this.submitAdd} />
        <button onClick={this.clearInput}>Clear</button>
      </div>
    )
  }
}
