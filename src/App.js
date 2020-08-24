import React from 'react';
import './App.css';
import '../src/Assets/css/custom.css'
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './router/AppRoute';
import '../src/Assets/css/responsive.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppRoute></AppRoute>
      </BrowserRouter>
    </div>
  );
}

export default App;
