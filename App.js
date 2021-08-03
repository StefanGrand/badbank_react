import React, { useContext , createContext, useState } from 'react';
import './App.css';
import {HashRouter, Route}  from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './components/home';
import CreateAccount from './components/createaccount';
import Login from './components/login';
import Deposit from './components/deposit';
import Withdraw  from './components/withdraw';
import AllData from './components/alldata';
import {UserContext} from './components/context';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  const [balance123, setBalance123] = useState(0);  

  function changeBalance (props){
    console.log("YOU ARE IN THE PARENT COMPONENT")
    let balance123	= props;
    let newBalance=  balance123 ;
    setBalance123(newBalance)
    console.log('newBalace' + newBalance)
    console.log('props' + props)
  }

  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:balance123, balChange: changeBalance}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} /> 
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

export default App
