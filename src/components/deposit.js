import React, { Component, useState, useContext } from 'react';
import Card from './cards';
import { UserContext} from './context'
     
function Deposit () {

  const [status, setStatus]     = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const ctx = useContext(UserContext); 
  //account
  const [deposit, setDeposit] = useState(0);
  const [totalState, setTotalState] = useState(0);
  const [isDeposit, setIsDeposit] = useState(true);
  const [validTransaction, setValidTransaction] = useState(false);
  
  const handleSubmit = (event) => {
    ctx.users[0].balChange()
    console.log("handleSubmit" );
    console.log(totalState);
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    ctx.users[0].balChange(newTotal);
    setTotalState(newTotal);
    setValidTransaction(false);
    event.preventDefault();
  };
  
  const handleChange = (event) => {
    // console.log(Number(event.target.value));
    console.log("handleChange" );
    setDeposit(Number(event.target.value));
  };
  

      // render(){
        return (
          <Card
            bgcolor="primary"
            header="Deposit"
            status={status}
            body={  
                    <>
                    
                    <button type="submit" className="btn btn-light" onClick={handleSubmit} >Confirm deposit</button>
                    <p></p>
                    <input type="number" min="1" className="btn btn-light" placeholder="Specify amount" onChange={handleChange}></input>
                    <p >Account Balance ${totalState}  </p>
                    <img src="deposit.PNG" className="img-fluid" alt="Responsive image" width="150rem"/>
                    <p></p>
                    <p>You are loged in as:</p>
                    <p> {JSON.stringify(ctx.users[ctx.users.length-1].email)}</p>
                    
                    <a className="btn btn-light"  href="#/login" >Logout</a>
                    {/* Logout to be defined */}
                    </>
                   }
          />
        )
      // }
    
}
export default Deposit;