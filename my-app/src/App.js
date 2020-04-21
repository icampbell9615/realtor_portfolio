import React from 'react';
import './App.css';
import Header from './components/Header';
import Services from './components/Services';
import About_Us from './components/About_Us.jsx'
import PAST from './components/Past_Properties';

function App() {
  return (
    <React.Fragment>
    <Header />
    <Services />
    <About_Us />
    <PAST/>
    </React.Fragment>
  );
}

export default App;
