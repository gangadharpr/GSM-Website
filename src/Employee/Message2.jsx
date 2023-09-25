import React, { Component } from 'react'

export class Message2 extends Component {
    state={
        msg:"Hello"
    }

        gmHandler=()=>{
            this.setState({msg: "Happy morning"} )
        }

        gaHandler=()=>{
            this.setState({msg: "Push Up"} )
        }
        gnHandler=()=>{
            this.setState({msg: "Go Away"} )
        }
  render() {
    return (
      <div>
        <h1>Message:{this.state.msg}</h1><br/>
        <button onClick={this.gmHandler}>GM</button>
        <button onClick={this.gaHandler}>GM</button>
        <button onClick={this.gnHandler}>GM</button>
        
      </div>
    )  
  }
}

export default Message2
