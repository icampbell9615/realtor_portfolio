import React from 'react';
import './App.css';
import HEADER from './components/HEADER';
import SERVICES from './components/SERVICES';
import ABOUTUS from './components/ABOUTUS.jsx'
import PAST from './components/PASTPROPERTIES';

function App() {
  return (
    <React.Fragment>
    <HEADER />
    <SERVICES />
    <ABOUTUS />
    <PAST/>
    </React.Fragment>
  );
}

export default App;
