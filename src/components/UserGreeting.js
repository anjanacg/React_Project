import React,{Component} from "react";
class UserGreeting extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:false
        }
    }
    render(){

        // short sircuit operator

          return this.state.isLoggedIn && <div> wlcome anjana</div>  
          


        
        
        //   ternary condition operator

        //   return(

        //     this.state.isLoggedIn? 
        //     <div>welcome anjana</div>:
        //     <div>welcome guest</div>
        //   )

        //   Element variable
//        let message
//        if(this.state.isLoggedIn){
//        message=<div>welcome anjana</div>
//        }
//        else{
//         message=<div>welcome guest</div>
//        }




    //   if else condition 
//    return <div>{message}</div>

        // if(this.state.isLoggedIn){
        //     return

        //         <div>Welcome anjana</div>
            
        // }
        // else{
        //     return <div>welcome guest</div>
        // }


        // return(
        //     <div>
        //         <div>Welcome anjana</div>
        //         <div>welcome guest</div>
        //     </div>
        // )
    }
}
export default UserGreeting