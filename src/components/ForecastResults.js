import React from 'react';

const ForecastResults = ({ results }) => {
  if (!results) {
    return <p>No results to display.</p>;
  }

  return (
    <div>
      <h2>Forecast Results</h2>
      <p>Average Growth Rate: {results.avgGrowthRate}%</p>
      <p>Total Sales: ${results.totalSales}</p>
      <p>Average Quarterly Sales: ${results.avgQuarterlySales}</p>
      <h3>Projected Quarters:</h3>
      <ul>
        {results.projectedQuarters.map((quarter, index) => (
          <li key={index}>Q{index + 1}: ${quarter}</li>
        ))}
      </ul>
      <p>Total Forecasted Sales: ${results.totalForecastedSales}</p>
    </div>
  );
};

export default ForecastResults;