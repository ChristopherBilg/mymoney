import React, { useState, useEffect } from 'react';
import { Card } from '@blueprintjs/core';
import axios from 'axios';

import './ExpenseDisplayCard.css';
import { HOSTNAME_AND_PORT, API_ENDPOINTS } from '../../global/constants';

const ExpenseDisplayCard = () => {
  const [allExpense, setAllExpense] = useState({ list: [] });
  const getAndSetExpenseData = () => {
    axios
      .get(`${HOSTNAME_AND_PORT}${API_ENDPOINTS.DATABASE_EXPENSE}`)
      .then((data) => setAllExpense({ list: data.data }));
  };

  useEffect(() => {
    getAndSetExpenseData();
    const interval = setInterval(() => getAndSetExpenseData(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card id='expenseDisplayCard'>
      <h1>Expense</h1>
      {allExpense.list.map((singleExpense) => (
        <div key={singleExpense.id}>
          [{singleExpense.id}] ${singleExpense.amount}: {singleExpense.comment}
        </div>
      ))}
    </Card>
  );
};

export default ExpenseDisplayCard;
