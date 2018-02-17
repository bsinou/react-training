import React, { Component } from 'react';
import './App.css';


const UserInput = (props) => {
  const inputStyle = {
    border: '2px solid blue',
    padding: '2px 5px'  
  };

  return (
    <input
      type='text'
      style= {inputStyle}
      onChange={props.change}
      value={props.name}
    />
  );
};

const UserOutput = (props) => {
  return (
    <div>
      <p>Username: {props.name}</p>
      <p>With a description</p>
    </div>
  );
};


class App extends Component {

  state = {
    username: 'John'
  }

  nameChangedHandler = (event) => {
    this.setState(
      {
        username: event.target.value
      }
    );
  }

  render() {
    const currName = this.state.username
    return (
      <div className="App">
        <UserInput name={currName} change={this.nameChangedHandler} />
        <div className="outputs">
          <UserOutput name={currName} />
          <UserOutput name={currName} />
          <UserOutput name={currName} />
        </div>
      </div>
    );
  }
}

export default App;
