import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

//components
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Creator from './components/CharCreator/Creator';

function App() {
  return (
    <div className="App">
      <Header />
      
      <Route exact path="/" component={HomePage} />
      <Route path="/create" component={Creator} />

      <Footer />
    </div>
  );
}

export default App;
