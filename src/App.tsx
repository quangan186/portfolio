import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Portfolio from './views/Portfolio';
import Preview from './views/Preview';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/preview' element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
