import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Components/HomePage';
import DetailsPage from './Components/DetailsPage';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;