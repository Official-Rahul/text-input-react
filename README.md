# Input React

Input React is a input component for your react application.
Below are the simple steps for installing and using Input React.


## `Latest version`

1.0.0


## `How to install`

npm install text-input-react


## `How to use`

### `Import`

```
import { TextInputReact } from "text-input-react";

```

### `Render component`

```
import React, { Component } from 'react';
import './App.css';
import { TextInputReact } from 'text-input-react';

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

```


## `Home page`

[https://github.com/Official-Rahul/text-input-react](https://github.com/Official-Rahul/text-input-react)


## `Github Repo`

[https://github.com/Official-Rahul/text-input-react](https://github.com/Official-Rahul/text-input-react)


## `Npm link`

[https://www.npmjs.com/package/text-input-react](https://www.npmjs.com/package/text-input-react)