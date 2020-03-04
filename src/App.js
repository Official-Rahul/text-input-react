import React, { Component } from 'react';
import './App.css';
import { TextInputReact } from './components/index';

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
        <TextInputReact
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
