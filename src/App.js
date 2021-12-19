import React from 'react';
import './App.css';
import Sidebar from './Sidebar';   
import Chat from './Chat';   

function App() {
  return (
    // BEM name convention
    <div className="App">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
