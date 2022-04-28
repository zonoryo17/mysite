// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Counter from './components/counter';

const App = () => {
  return (
  <div className="ui container" style= {{marginTop: '20px'}}>
    
    <Counter />
  </div>
  );
};






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
