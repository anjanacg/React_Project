import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet  from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NumberList from './components/NumberList';
import Person from './components/Person';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css'
import Form from './components/Form';
import './App.css'
import LifeCycleA from './components/LifeCycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import Purecomp from './components/PureComp';
import ParentComp from './components/ParentComp';
import PureComp from './components/PureComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import './App.css'
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounteTwor from './components/ClickCounteTwor';
import HoverCountertwo from './components/HoverCountertwo';
import User from './components/User';
import Counter123 from './components/Counter123';
import { UserProvider } from './components/UserContext';
import ComponentC from './components/ComponentC';
class App extends Component {
  render() {
    return (
      
       <div className="App">
      <UserProvider value="anjana">
      <ComponentC/>
      </UserProvider>

       
        {/* <Counter123 
        render={(count,incrementCount)=>
        (<ClickCounteTwor count={count} incrementCount={incrementCount}/>
        )}
        />
        
        <Counter123 
        render={(count,incrementCount)=>
        (<HoverCountertwo count={count} incrementCount={incrementCount}/>
        )}
        />
         */}
    


{/* 
  <User render={(isLoggedIn)=>isLoggedIn?'Anjana':'guest'}/>
        <ClickCounteTwor/>
        <HoverCountertwo/> */}
       {/* <ClickCounter name="Anjana" />

<HoverCounter/> */}

        {/* <ClickCounter/>
      <ErrorBoundary>
    <Hero heroName="asha"/></ErrorBoundary>
    <ErrorBoundary> <Hero heroName="pallavi"/></ErrorBoundary>
    <ErrorBoundary><Hero heroName="anjana"/>
    </ErrorBoundary> */}
    
      {/* <Hero heroName="anjana"/> */}
       {/* <PortalDemo/> */}
        
        {/* <FRParentInput/> */}
        {/* <FocusInput/>
        <RefsDemo/> */}
        {/* <ParentComp/> */}
        {/* <PureComp/> */}
        {/* <Table/>
       <FragmentDemo/> 
          <Form/>
          <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success
        </h1>
         <Inline/>  
         <LifeCycleA /> 
         <Stylesheet primary={true}/>
         <NumberList/> 
        
         <UserGreeting/> 
         <ParentComponent/>
          <EventBind/>
        <FunctionClick/>
        <ClassClick/>  

 <Counter/> 


        <Greet name="ujwal" heroName="batman">
           <p>This is a Children props</p>
          </Greet>
       <Greet name="Sanjay" heroName="SuperMan" >
          <button>Action</button>
   </Greet>


         <Greet  name="pallu" heroName="Wonder" /> 
       
         <Welcome name="ujwal" heroName="batman"/>
         <Welcome name="Sanjay" heroName="SuperMan"/>
        <Welcome name="pallu" heroName="Wonder"/>
         <Hello/>  
         <Message /> */}
      </div>
    );
  }
}

export default App;
