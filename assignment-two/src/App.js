import React, { Component } from 'react';
import './App.css';


const minimumLength = 5;

const UserInput = (props) => {
  return (
    <div>
      <p> Please enter a text that is at least {minimumLength} character long.</p>
      <input
        type='text'
        onChange={props.changed}
        value={props.myText}
      />
    </div>
  );
};

const InfoBox = (props) => {
  const charNb = props.myText.split('').length;
  const warningColor = charNb >= minimumLength ? 'green' : 'red';
  const warningText = charNb >= minimumLength ? 'Your text is long enough.' : 'Your text is too short.';
  const warningStyle = {
    font: 'bold 15px arial, sans-serif',
    color: warningColor
  };
  return (
    <div>
      <p>Your text contains {charNb} characters.</p>
      <p style={warningStyle}>{warningText}</p>
    </div>
  );
};

const CharComponent = (props) => {
  let myChar = props.currChar;
  // small hack to workaround display issue for the white space char
  // Cannot use &nbsp; that is written as is and unvalid. 
  if (myChar == ' '){
    myChar = '\u00A0';
  }

  return (
    <div
      className="CharBox"
      onClick={(event) => props.clicked(event, props.charIndex)}
    >
      {myChar}
    </div>
  );
};

class App extends Component {

  state = {
    myText: ''
  };

  userInputChangedHandler = (event) => {
    this.setState({
      myText: event.target.value,
    })
  };

 charClickedHandler = (event, charIndex) => {
  let newArr = [...this.state.myText.split('')];
  newArr.splice(charIndex, 1);
  this.setState({
      myText: newArr.join('')
    });
  };

  render() {
   const chars = this.state.myText.split('').map((currChar, index) => {
      return <CharComponent
        currChar={currChar}
        charIndex={index}
        clicked={this.charClickedHandler}
        key={index}
      />
    });
  
    return (
      <div className="App">
        <h1>Second assignment</h1>
        <UserInput myText={this.state.myText} changed={this.userInputChangedHandler} />
        <InfoBox myText={this.state.myText} />
        <div className="Box">
          {chars}
        </div>
      </div >
    );
  }
}

export default App;
