// BASIC REACT APP SETUP PAGE
/* import logo from './logo.svg';
import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello world!</p>
      </header>
    </div>
  );
}

export default App;
*/

// LOGIN PAGE 
import React from 'react';
import './App.css';
import profile from "./image/a.png";
import email from "./image/email.jpg";
import pass from "./image/pass.png";
function App(){
   return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
         </div>
       </div>
     </div>
    </div>
  );
}
export default App; 


/*
// useState hook 
 import React, { useState } from "react";
 function App(){
  const [count, setCount] = useState(0)
  const [theme, setTheme] =useState('blue')
  function decCount() {
    setCount(prevCount => prevCount-1)
  }
  function incCount() {
    setCount(prevCount => prevCount+1)
    setTheme('red')
  }
  
  return (
    <>
    <button onClick ={decCount}> - </button>
<span>{count}</span>
<span>{theme}</span>
    <button onClick ={incCount}> + </button>
    </>
  );
 }
 export default App;

 */
/*
 //handling state in class components

 import React from "react";
 class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
 
  render() {
    return (
      <div>
        <p>count: {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
      </div>
    );
  }
 }
 export default ClassComponent;
 */
/*
 //useEffect hook
 import React, {useState, useEffect} from "react";
 export default function App() {
  const [resourceType, setResourceType] = useState('posts')


  useEffect(() => {
    console.log('resource changed')
    return () => {
    console.log('return from resource change')
    }
  },[resourceType])

  return (
    <>
    <div>
      <button onClick={()=> setResourceType('posts')}>Posts</button>
      <button onClick={()=> setResourceType('users')}>Users</button>
      <button onClick={()=> setResourceType('comments')}>Comments</button>
    </div>
    <h1>{resourceType}</h1>
    </>
  )
 }
 */