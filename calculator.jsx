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

  add(e) {
    e.preventDefault()
    this.setState({
      'result': parseInt(this.state.num1) + parseInt(this.state.num2)
    })
  }

  subtract(e) {
    e.preventDefault()
    this.setState({
      'result': parseInt(this.state.num1) - parseInt(this.state.num2)
    })
  }

  multiply(e) {
    e.preventDefault()
    this.setState({
      'result': parseInt(this.state.num1) * parseInt(this.state.num2)
    })
  }

  divide(e) {
    e.preventDefault()
    this.setState({
      'result': parseInt(this.state.num1) / parseInt(this.state.num2)
    })
  }

  clear(e) {
    e.preventDefault()
    this.setState({
      'num1': '',
      'num2': ''
    })
  }

  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
        <input value={this.state.num1}>
        </input>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>X</button>
        <button onClick={this.divide}>BIG MIKE</button>
        <input value={this.state.num2}></input>
      </div>
    );
  }
}

export default Calculator;
