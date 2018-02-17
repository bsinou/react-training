// import React, { Component } from 'react';
// import './App.css';


// const minimumLength = 5;

// const UserInput = (props) => {
//   return (
//     <div>
//       <p> Please enter a text that is at least {minimumLength} character long.</p>
//       <input
//         type='text'
//         onChange={props.changed}
//         value={props.myText}
//       />
//     </div>
//   );
// };

// const InfoBox = (props) => {
//   const charNb = props.myText.split('').length;
//   const warningColor = charNb >= minimumLength ? 'green' : 'red';
//   const warningText = charNb >= minimumLength ? 'Your text is long enough.' : 'Your text is too short.';
//   const warningStyle = {
//     font: 'bold 15px arial, sans-serif',
//     color: warningColor
//   };
//   return (
//     <div>
//       <p>Your text contains {charNb} characters.</p>
//       <p style={warningStyle}>{warningText}</p>
//     </div>
//   );
// };

// const CharComponent = (props) => {
//   const charBoxStyle = {
//     font: 'bold 20px arial, sans-serif',
//   };

//   return (
//     <div
//       className={charBoxStyle}
//       onClick={() => props.clicked(props.charIndex)}
//     >
//       {props.currChar}
//     </div>
//   );
// };

// const DisplayBox = (props) => {
//   const boxStyle = {
//     border: '1px solid grey',
//     padding: '2px 3px',
//     backgroundColor: '#ccc'
//   };

//   const chars = props.myText.split('').map((currChar, index) => {
//     return <CharComponent
//       currChar={currChar}
//       charIndex={index}
//       clicked={props.clicked}
//       key={index}
//     />
//   });

//   return (
//     <div style={boxStyle}>
//       {chars}
//     </div>
//   );
// };

// class App extends Component {

//   state = {
//     myText: ''
//   };

//   userInputChangedHandler = (event) => {
//     this.setState({
//       myText: event.target.value,
//     })
//   };

//   charClickedHandler = (event, charIndex) => {
//     let newArr = [...this.state.myText.split('')];
//     newArr.splice(charIndex, 1);
//     this.setState({
//       myText: newArr.join('')
//     });
//   };

//   render() {
//     return (
//       <div className="App">
//         <h1>Second assignment</h1>
//         <UserInput myText={this.state.myText} changed={this.userInputChangedHandler} />
//         <InfoBox myText={this.state.myText} />
//         <DisplayBox myText={this.state.myText} clicked={this.charClickedHandler} />
//       </div >
//     );
//   }
// }

// export default App;
