import React from 'react'

export default class Todo extends React.Component {
  clickHandler = () => {
    this.props.toggle(this.props.todo.id);
  }
  render() {
    return (<li onClick={this.clickHandler}>{this.props.todo.task} { this.props.todo.completed? <span>completed</span>:<span></span> }</li>)
  }
}

