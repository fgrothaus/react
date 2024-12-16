import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Bedingtes_rendern, Bedingtes_rendern2 } from './components/JSX_bedingtes_rendern';
import { Events } from './components/Events';
import {States} from "./components/States";
import {Hooks} from "./components/Hooks";
import {Jsx_schleifen} from "./components/Jsx_schleifen";
import {Hooks_Arbeitsweise} from "./components/Hooks_Arbeitsweise";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { States2 } from './components/States2';

// Komponenten für die Seiten
// function Home() {
//   return <h2>States</h2>;
// }

// function About() {
//   return <h2>About Page</h2>;
// }

// function Contact() {
//   return <h2>Contact Page</h2>;
// }


function App() {
  
  return (
      <React.Fragment>
        {/*NEW*/}
        {/* <States/> */}
        <States2/>
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

              //   {/* React Routing */}
              //   <Router>
              //   <div>
              //     {/* Navigation */}
              //     <nav>
              //       <ul>
              //         <li>
              //           <Link to="/States">States</Link>
              //         </li>
              //         <li>
              //           <Link to="/BedingtesRendern">BedingtesRendern</Link>
              //         </li>
              //         <li>
              //           <Link to="/Hooks">Hooks</Link>
              //         </li>
              //       </ul>
              //     </nav>
      
              //     {/* Routes definieren */}
              //     <Routes>
              //       <Route path="/States" element={<States />} />
              //       <Route path="/BedingtesRendern" element={<Bedingtes_rendern2 />} />
              //       <Route path="/Hooks" element={<Hooks_Arbeitsweise />} />
              //     </Routes>
              //   </div>
      
              // </Router>
export default App;