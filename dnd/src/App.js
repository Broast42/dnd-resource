import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

//components
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import CharacterSheet from './components/charsheet/CharacterSheet';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Route exact path="/" component={HomePage} />
      
      <Route path="/sheet" component={CharacterSheet} />

      <Footer />
    </div>
  );
}

export default App;
