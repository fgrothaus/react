import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Schleifen } from './components/Schleifen';
import { Bedingtes_rendern } from './components/JSX_bedingtes_rendern';
import { Events } from './components/Events';





function App() {
  return (
    
    <React.Fragment>
      <Schleifen />
      <Bedingtes_rendern />
      <Events />
    </React.Fragment>


  );
}

export default App;
