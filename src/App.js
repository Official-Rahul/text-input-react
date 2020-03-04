import React, { Component } from 'react';
import './App.css';
import { InputReact } from './components/index';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value:''
    }
  }

  changeHandler=(e)=>{
    this.setState({
      value:e.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
        <InputReact
          value={this.state.value}
          label="Name"
          placeholder="Enter name"
          handleChange={this.changeHandler}
        />
      </div>
    )
  }
}

export default App
