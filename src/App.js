import React, { useState } from 'react';
import ForecastForm from './components/ForecastForm';
import ForecastResults from './components/ForecastResults';

function App() {
  const [forecastResults, setForecastResults] = useState(null);

  return (
    <div>
      <h1>Sales Forecast Tool</h1>
      <ForecastForm onResults={setForecastResults} />
      {forecastResults && <ForecastResults results={forecastResults} />}
    </div>
  );
}

export default App;