import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './routes/Welcome/index'
import './App.css';

function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', flex: 1 }}>
      <Welcome />
    </div>
  );

}

export default App;
