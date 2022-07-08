import React, { Component } from 'react'

 class input extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef=react.createRef()
    }

    focusInput(){
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <input type="text"  ref={this.inputRef}/>
      </div>
    )
  }
}

export default input