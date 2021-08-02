import React, { Component, useState, useContext } from 'react';
import Card from './cards';
import { UserContext} from './context'

function Withdraw () {

  const [status, setStatus]     = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const ctx = useContext(UserContext); 
  //account
  const [deposit, setDeposit] = useState(0);
  const [totalState, setTotalState] = useState(0);
  const [isDeposit, setIsDeposit] = useState(true);
  const [validTransaction, setValidTransaction] = useState(false);
  const [balance123, setBalance123] = useState(); 

  const handleSubmit = (event) => {
    ctx.users[0].balChange()
    console.log("handleSubmit" );
    console.log(totalState);
    let newTotal = isDeposit ? totalState - deposit : totalState + deposit;
    //  if (newTotal > -1) {
    //    setTotalState(newTotal)
       
    //    ctx.users[0].balChange(newTotal);}
    //    else { window.alert("Your balance is not suffient")}
     
    setTotalState(newTotal)
       
    ctx.users[0].balChange(newTotal);
    
    
    event.preventDefault();
  };
    // const handleSubmit = (event) => {
    //   console.log(newTotal);
    //   let newTotal = isDeposit ? totalState - deposit : totalState + deposit;
    //     if (newTotal > -1) {
    //     setTotalState(newTotal)
    //     ctx.users[0].balChange(newTotal);}
    //     else { window.alert("Your balance is not suffient")}
    //   event.preventDefault();
    // };
  
    const handleChange = (event) => {
      console.log(Number(event.target.value));
      setDeposit(Number(event.target.value));
    };

// export default class Withdraw extends Component{
    // render(){
    return (
      <Card
        bgcolor="primary"
        header="Withdraw"
        status={status}
        body={
                <>
                <button type="submit" className="btn btn-light" onClick={handleSubmit}>Confirm withdraw</button>
                <p></p>
                <input type="number" min="1" className="btn btn-light" placeholder="Amount (min $1)" onChange={handleChange} ></input>
                <p>Account Balance  ${JSON.stringify(ctx.users[ctx.users.length-1].balance)} </p>
                <img src="withdraw.PNG" className="img-fluid" alt="Responsive image" width="150rem"/>
                <h1>
                </h1>
                <p></p>
                <p>You are loged in as:</p>
                <p> 
                {JSON.stringify(ctx.users[ctx.users.length-1].email)}</p>
                <a className="btn btn-light" href="#/login" >Logout</a>
                </>
              }
      />
    )
  // }
// }
}
export default Withdraw;