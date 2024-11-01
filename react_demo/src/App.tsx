import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Schleifen } from './components/old/Schleifen';
import { Bedingtes_rendern, Bedingtes_rendern2 } from './components/old/JSX_bedingtes_rendern';
import { Events } from './components/old/Events';
import {States} from "./components/States";
import {Hooks} from "./components/Hooks";
import {JsonReader} from "./components/JsonReader";





function App() {
  return (
    
    <React.Fragment>
        {/*<Schleifen />*/}
        {/*<Bedingtes_rendern />*/}
        {/*<Events />*/}
        {/*<Bedingtes_rendern2 />*/}

        {/*NEW*/}
        {/*<States/>*/}
        {/*<Hooks/>*/}
        <JsonReader/>
    </React.Fragment>


  );
}

export default App;
