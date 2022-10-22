import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './components/Detail';

function App() {
  return ( // prop은 2개 받음 path, element
  // v6에서는 exact 사라짐, 정확히 일치해야만 적용됨, Hashrouter는 이제 사용하지 마라
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie-detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;