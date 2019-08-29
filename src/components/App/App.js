import React, {Component} from 'react';
import './App.css';
import Form from '../Form/Form';
import Container from '../Container/Container';

class App extends Component {
  constructor() {
    super()
    this.state = {
      things: [],
      error: ''
    }
  }

  addThing = (newThing) =>  {
    this.setState({
      things: [...this.state.things, newThing]
    })
  }

  removeThing = (id) => {
    let filteredThings = this.state.things.filter(thing => thing.id !== id);
    this.setState({things: filteredThings})
  }
  
  render() {
    return(
      <main className="App">
        <h1>THING APP!</h1>
        <Form addThing={this.addThing}/>
        <Container data={this.state.things} removeThing={this.removeThing}/>
      </main>
    )
  }
}

export default App;