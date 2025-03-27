// src/App.jsx
import React from 'react';
import ProdukList from './components/ProdukList';
import ProdukForm from './components/ProdukForm';
import './styles/buttons.css';

function App() {
  return (
    <div>
      <header className="header">
        <h1>E-Commerce Sederhana</h1>
      </header>
      <div className="container">
        <ProdukForm />
        <ProdukList />
      </div>
    </div>
  );
}

export default App;
