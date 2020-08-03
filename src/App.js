import React from 'react';
import './App.css';
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
