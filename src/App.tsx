import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Portfolio from './views/Portfolio';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
