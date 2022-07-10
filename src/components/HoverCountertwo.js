import React, { Component } from 'react'

 class HoverCountertwo extends Component {
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
      <h2 onMouseOver={incrementCount}>Hoverd {count} counts</h2>
    )
  }
}

export default HoverCountertwo