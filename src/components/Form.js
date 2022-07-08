import React, { Component } from 'react'

export class Form extends Component {



    constructor(props) {
      super(props)
    
      this.state = {
         username:' ',
         comments:' ',
         topic:' '
      }
    }
    handleUsernameChange=(event)=>{
     this.setState({
    username:event.target.value
  })
    }

    handleCommentsChange=(event)=>{
        this.setState=({
        comments:event.target.value
       } )
    }

    handleTopicsChange=event=>{
        this.setState=({
            topic:event.target.value
        })
    }

    handSubmit=event=>{
        alert(`${this.state.username}${this.state.comments}${this.state.topic}`)
    }
  render() {
    return (
     <form onSubmit={this.handSubmit}>
        <div>
            <label>Username</label>
            <input type="text" 
            value={this.state.username} 
            onChange={this.handleUsernameChange}></input>
        </div>
        <div>
           <label>
           Comments
           </label>
           <textarea 
           value={this.state.comments}
           onChange={this.handleCommentsChange}></textarea>
        </div>

        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicsChange} >
              <option value="react"> React</option>  
              <option value="angular"> Angular</option>  
              <option value="HTML"> Html</option>  
            </select>
        </div>
        <button type="submit">submit</button>
     </form>
    )
  }
}

export default Form