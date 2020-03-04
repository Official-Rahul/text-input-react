# Input React

Input React is a input component for your react application.
Below are the simple steps for installing and using Input React.


## `Latest version`

1.0.0


## `How to install`

npm install input-react


## `How to use`

### `Import`

```
import { InputReact } from "input-react";

```

### `Render component`

```
import React, { Component } from 'react';
import './App.css';
import { InputReact } from 'input-react';

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

```


## `Home page`

[https://github.com/Official-Rahul/input-react](https://github.com/Official-Rahul/input-react)


## `Github Repo`

[https://github.com/Official-Rahul/input-react](https://github.com/Official-Rahul/input-react)


## `Npm link`

[https://www.npmjs.com/package/input-react](https://www.npmjs.com/package/input-react)