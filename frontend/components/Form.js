import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }
  addNew = (evt) => {
    evt.preventDefault();
    this.props.submitAdd(this.state.input);
  }

  change = (evt) => {
    this.setState({
      ...this.state,
      input: evt.target.value
    });
  }

  render() {
    return ( 
    <form>
      <input onChange={this.change}>

      </input>

      <button onClick={this.addNew}>Add</button>
    </form>)
  }
}

