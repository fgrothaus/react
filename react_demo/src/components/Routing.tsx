import React, {useState} from 'react';
import logo from './logo.svg';
import { MainComponent } from './react_grundlagen/MainComponent';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import { States } from './react_grundlagen/States';
import { Hooks } from './react_grundlagen/Hooks';

function NavigationButton() {
  const navigate = useNavigate();
  return <button onClick={() => navigate('/States')}>useNavigate</button>;
}


function Routing() {
  
    // Routing muss extra installiert werden
    // npm install --save react-router-dom (--save wird verwendet, um sicherzugehen, dass es auch in die package.json persistiert wird)
    // In TypeScript muss auch das installiert werden: npm i --save-dev @types/react-router-dom

    // Router gehört normalerweise auf aller höchste Ebene der Anwendung

  return (
      <Router>
        <nav>
          <Link to="/">Startseite</Link>
          {/* <a href='/States'>States</a> */} {/* Link/NavLink verwenden, da mit Ankerelement der Zustand immer wieder neu geladen wird beim Klick auf States */}
          <NavLink to="/Hooks">Hooks</NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<MainComponent />} />
          <Route path='/Hooks' element={<Hooks />} /> {/* Siehe Hooks für Erklärung zu useNavigate */}
          <Route path='/States' element={<States />} />
        </Routes>
        {/* <Hooks /> */}
      </Router>  
  );
}

export default Routing;