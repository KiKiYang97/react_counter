import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/index'
import CounterGroup from './components/CounterGroup';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
     <CounterGroup value={3}/>
    </div>
  );
}

export default App;
