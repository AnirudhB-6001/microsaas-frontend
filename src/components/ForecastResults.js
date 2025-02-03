import React from 'react';

const ForecastResults = ({ results }) => {
  if (!results) return null;

  return (
    <div>
      <h2>Forecast Results</h2>
      <p>Average Growth Rate: {results.avgGrowthRate}%</p>
      <p>Total Sales: ${results.totalSales}</p>
      <p>Average Quarterly Sales: ${results.avgQuarterlySales}</p>
      <p>Total Forecasted Sales: ${results.totalForecastedSales}</p>
      <h3>Projected Quarters</h3>
      <ul>
        {results.projectedQuarters.map((q, index) => (
          <li key={index}>Quarter {index + 1}: ${q}</li>
        ))}
      </ul>
    </div>
  );
};

export default ForecastResults;