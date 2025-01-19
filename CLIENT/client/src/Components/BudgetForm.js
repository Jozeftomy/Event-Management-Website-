import React, { useState } from 'react';
import './BudgetForm.css';

function BudgetForm() {
  const [budgetData, setBudgetData] = useState({
    eventName: '',
    amount: '',
    venue: '',
    catering: '',
    decoration: '',
    totalExpenses: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBudgetData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const calculateTotalExpenses = () => {
    const { venue, catering, decoration } = budgetData;
    const total =
      parseFloat(venue || 0) +
      parseFloat(catering || 0) +
      parseFloat(decoration || 0);
    return total.toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalExpenses = calculateTotalExpenses();
    console.log({ ...budgetData, totalExpenses });
    alert('Budget saved successfully!');
  };

  return (
    <div className='background'>
    <div className="budget-form-container">
      <h2>Manage Budget</h2>
      <form onSubmit={handleSubmit} className="budget-form">
        {/* Event Details */}
        <div className="form-section">
          <label>
            Event Name:
            <input
              type="text"
              name="eventName"
              value={budgetData.eventName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Total Budget Amount:
            <input
              type="number"
              name="amount"
              value={budgetData.amount}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        {/* Expenses */}
        <div className="form-section">
          <h3>Expenses</h3>
          <label>
            Venue:
            <input
              type="number"
              name="venue"
              value={budgetData.venue}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Catering:
            <input
              type="number"
              name="catering"
              value={budgetData.catering}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Decoration:
            <input
              type="number"
              name="decoration"
              value={budgetData.decoration}
              onChange={handleChange}
              required
            />
          </label>
          <div className="total-expenses">
            <strong>Total Expenses: </strong>&#8377;{calculateTotalExpenses()}
          </div>
        </div>

        {/* Submit */}
        <button type="submit" className="save-budget-button">
          Save Budget
        </button>
      </form>
    </div>
    </div>
  );
}

export default BudgetForm;
