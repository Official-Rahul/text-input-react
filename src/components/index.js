import React, { Component } from 'react'

export class TextInputReact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <label>{this.props.label}</label>
                <input value={this.props.value} placeholder={this.props.placeholder} onChange={this.props.handleChange}></input>
            </React.Fragment>
        )
    }
}

export default TextInputReact
