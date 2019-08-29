import React, {Component} from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: ""
    }
  }
  
  handleTyping = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { addThing } = this.props;
    let newThing = {
      ...this.state,
      id: Date.now()
    }
    addThing(newThing);
    this.setState({
      title: "",
      description: ""
    })
  }

  render() {
    return (
      <form className="Form">
        <input type="text" name="title" placeholder="Thing Title" value={this.state.title} onChange={this.handleTyping}></input>
        <input type="text" name="description" placeholder="Thing Description" value={this.state.description} onChange={this.handleTyping}></input>
        <button onClick={this.handleSubmit}>SUBMIT THING</button>
      </form>
    )
  };
};

export default Form;