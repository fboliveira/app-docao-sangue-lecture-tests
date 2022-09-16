import React from 'react';
import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
