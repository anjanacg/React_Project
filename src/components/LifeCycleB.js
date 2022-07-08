import React, { Component } from 'react'

export class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'anjana'
      }
      console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerivedStatefromProps')
        return null
    }

    componentDidMount(){
        console.log('lifecycleB componentMount method')
        return true
    }



    shouldComponentUpdate(){
        console.log('Lifecycle B shouldComponentupdate')
        return true
    }


    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('lifeCycleB get snapshotBeforeUpdate')
        return null
    }

    componentDidUpdate()
    {
        console.log('LifeCycleBcomponentDidUpdate')
    }
    render(){
        console.log('LifecycleB render')
     return(
        <div>LifeCycleB</div>
     )
    }


  
}

export default LifeCycleB