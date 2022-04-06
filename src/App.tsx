import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
    </div>
  );
}

export default App;
