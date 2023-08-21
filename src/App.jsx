import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import "../bootstrap.config";
import "./App.scss";


import Index from './Components/Pages/Index';
// import Todos from './Components/Pages/Todos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} exact />
        {/* <Route path="/todo" element={<Todos />} exact /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;