import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Bedingtes_rendern, Bedingtes_rendern2 } from './components/JSX_bedingtes_rendern';
import { Events } from './components/Events';
import {States} from "./components/States";
import {Hooks} from "./components/Hooks";
import {Jsx_schleifen} from "./components/Jsx_schleifen";
import {Hooks_Arbeitsweise} from "./components/Hooks_Arbeitsweise";


function App() {
  
  return (
    
    <React.Fragment>
        {/*NEW*/}
        <States/>
        {/*<Hooks/>*/}
        {/*<Jsx_schleifen/>*/}
        {/*<Bedingtes_rendern2 />*/}
        {/*<Events />*/}

        {/* Komponenten sind unabhängig voneinander. Das heißt, useStates der gleichen Komponente sind ebenfalls unabhängig */}
        {/*<Hooks_Arbeitsweise />*/}
        {/*<Hooks_Arbeitsweise />*/}
        {/*<Hooks_Arbeitsweise />*/}
    </React.Fragment>


  );
}

export default App;
