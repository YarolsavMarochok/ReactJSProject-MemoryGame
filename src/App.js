import {BrowserRouter as Router, Link, Routes, Route} from 'react-router-dom';
import './components/main/main.css';

import useLocalStorage from 'use-local-storage';

import React, {useState} from 'react';

import Nav from './components/nav';
import Home from './components/main/main';
import Mode1 from './components/mods/mode1';
import Mode2 from './components/mods/mode2';
import Mode3 from './components/mods/mode3';
import Mode4 from './components/mods/mode4';

function App() {
  
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
  <Router>
    <div className="App" data-theme={theme}>
      <Nav />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/mode1' element={<Mode1 cardsCount={4} availableClicks={3}/>}/>
            <Route path='/mode2' element={<Mode2 cardsCount={8} availableClicks={8}/>}/>
            <Route path='/mode3' element={<Mode3 cardsCount={12} availableClicks={12}/>}/>
            <Route path='/mode4' element={<Mode4 cardsCount={16} availableClicks={24}/>}/>

          </Routes>

          <footer>
            <p>ChangeTheme</p>
            <label class="switch">
              <input type="checkbox" onClick={switchTheme}/>
              <span class="slider round"></span>
            </label>
        
          </footer>

      </div>
  </Router>

  );
}

export default App;
