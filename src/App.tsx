import React from 'react';
import './App.scss';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <Sidebar />
      {/* Home */}
      <Chat />
    </div>
  );
}

export default App;
