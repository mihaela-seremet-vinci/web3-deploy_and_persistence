import { useState } from 'react';
import ExpenseAdd from '../components/ExpenseAdd';
//import { useNavigate } from 'react-router-dom';
import type { ExpenseInput } from '../types/Expense';

export default function Add() {
  const [error, setError] = useState<string | null>(null);
 //const navigate = useNavigate();

  const host = import.meta.env.VITE_API_URL || 'http://unknown-api-url.com';

  const handleAddExpense = async (newExpense: ExpenseInput): Promise<void> => {
    try {
      const response = await fetch(`${host}/api/expenses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newExpense),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      await response.json();
      setError(null);
      // Optionally, you could show a success message here
    } catch (error) {
      console.error('Error adding expense:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  return (
    <div>
      <h1>Add New Expense</h1>

      {error && <div>Error: {error}</div>}

      <div>
        <ExpenseAdd addExpense={handleAddExpense} />
      </div>
    </div>
  );
}