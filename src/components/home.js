import React, { Component } from "react";
import Card from './cards';

export default class Home extends Component{

render() {
    return (
        <Card
          txtcolor="black"
          header="BadBank Landing Module"
          title="Welcome to the bank"
          text="You can move around using the navigation bar."
          body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
        />    
      );  
    }
}