import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'anjana'
      }
      console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerivedStatefromProps')
        return null
    }

    componentDidMount(){
        console.log('lifecycleA componentMount method')
    }

    shouldComponentUpdate(){
        console.log('Lifecycle A shouldComponentupdate')
        return true
    }


    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('lifeCycleA get snapshotBeforeUpdate')
       return null 
    }

    componentDidUpdate()
    {
        console.log('LifeCycleA componentDidUpdate')
        
    }

    changeState=()=>{
        this.setState({
            name:'CodeEvolution'
        })
    }

    render(){
        console.log('LifecycleA render')
     return(
        <div>
        <div>LifeCycleA</div>
        <button onClick={this.changeState}>Change state</button>
        <LifeCycleB/>
        </div>
     )
    }


  
}

export default LifeCycleA