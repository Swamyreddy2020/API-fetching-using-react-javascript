import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import CatBreeds from './Data.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/target" element={<CatBreeds />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;