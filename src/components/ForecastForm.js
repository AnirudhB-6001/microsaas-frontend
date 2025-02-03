import React, { useState } from 'react';
import axios from 'axios';

const ForecastForm = ({ onResults }) => {
  const [formData, setFormData] = useState({ q1: '', q2: '', q3: '', q4: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(
            'https://phenomenal-cupcake-5514ef.netlify.app/.netlify/functions/forecast',
            formData,
            { headers: { 'Content-Type': 'application/json' } }
        );
        console.log('API Response:', response.data);  // Log the response to check its data
        onResults(response.data);
    } catch (error) {
        console.error('Error fetching forecast:', error);
        alert('Failed to fetch forecast. Please try again.');
    }
};

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Q1 Sales:
        <input type="number" name="q1" value={formData.q1} onChange={handleChange} required />
      </label>
      <label>
        Q2 Sales:
        <input type="number" name="q2" value={formData.q2} onChange={handleChange} required />
      </label>
      <label>
        Q3 Sales:
        <input type="number" name="q3" value={formData.q3} onChange={handleChange} required />
      </label>
      <label>
        Q4 Sales:
        <input type="number" name="q4" value={formData.q4} onChange={handleChange} required />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default ForecastForm;