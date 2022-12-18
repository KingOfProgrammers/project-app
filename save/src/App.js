import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useState } from 'react';
import Landing from './Landing';
import Login from './Login';
import AppU from './user/AppU';
import AppMH from './AppMH';
import RegisterU from './RegisterU';


function getRegister(){

}

function App() {
  // 1=Landing  2=RegisterU 3=Login 5=App
  const [logIn, setlogIn] = useState(1);
  const [isStudent, setIsStudent] = useState(-1);
  const [userNameApp, setUserNameApp] = useState("");
  const [passApp, setPassApp] = useState("");

  

  if(logIn == 1){
    return(
      <div>
       <Landing setlogIn={setlogIn} setIsStudent={setIsStudent} setUserNameApp={setUserNameApp} setPassApp={setPassApp}/>
      </div>
    )
  }
  else if(logIn == 2){
    return(
      <div>
       <Login setlogIn={setlogIn} setIsStudent={setIsStudent} setUserNameApp={setUserNameApp} setPassApp={setPassApp}/>
      </div>
    )
  }else if(logIn == 3){
    return(
      <div>
       <RegisterU setlogIn={setlogIn} setUserNameApp={setUserNameApp} setPassApp={setPassApp}/>
      </div>
    )
  }else if(logIn == 5 && isStudent == 1){
    return(
      <div>
       <AppU setUserNameApp={setUserNameApp} setPassApp={setPassApp} userNameApp={userNameApp} passApp={passApp}/>
      </div>
    )
  }else if(logIn == 5 && isStudent == 0){
    return(
      <div>
       <AppMH setUserNameApp={setUserNameApp} setPassApp={setPassApp} userNameApp={userNameApp} passApp={passApp}/>
      </div>
    )
  }
  


}

export default App;


  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
*/