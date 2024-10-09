import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Schleifen } from './components/Schleifen';
import { Bedingtes_rendern, Bedingtes_rendern2 } from './components/JSX_bedingtes_rendern';
import { Events } from './components/Events';





function App() {
  return (
    
    <React.Fragment>
        <Schleifen />
        <Bedingtes_rendern />
        <Events />
        <Bedingtes_rendern2 />
    </React.Fragment>


  );
}

export default App;
