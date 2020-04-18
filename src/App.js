import React, { useRef, useState } from 'react';
import './App.css';
import ChatView from './components/chat/ChatView';
import InputText from './atoms/input/InputText';
import Button from './atoms/button/Button';

function App() {

  return (
    <div className="App">
      <ChatView />
    </div>
  );
}

export default App;
