import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForecastForm from './components/ForecastForm';
import ForecastResults from './components/ForecastResults';

function App() {
  const [results, setResults] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ForecastForm onResults={setResults} />} />
        <Route path="/results" element={<ForecastResults results={results} />} />
      </Routes>
    </Router>
  );
}

export default App;