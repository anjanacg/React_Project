import React, { Component } from 'react'
import WithCounter from './WithCounter'
export class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
    //   incrementCount=()=>{
    //       this.setState(prevState=>{
    //           return {count:prevState.count+1}
    //       })
  
    //   }
  render() {
    const {count,incrementCount}=this.props
    return (
      
        <h2 onMouseOver={incrementCount}>
            Hoverd {count} times</h2>
    
    )
  }
}

export default WithCounter(HoverCounter,10)