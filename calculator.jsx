import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num1: "",
      num2: "",
      result: 0
    }
    
    this.setNum1 = this.setNum1.bind(this);
  }

  setNum1(e) {
    // 
  }

  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input value={this.state.num1}>
        </input>
      </div>
    );
  }
}

export default Calculator;
