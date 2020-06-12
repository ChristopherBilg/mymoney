import React, { useState, useEffect } from 'react';
import { Card, Button } from '@blueprintjs/core';
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

  const handleClick = (id) => {
    axios
      .delete(`${HOSTNAME_AND_PORT}${API_ENDPOINTS.DATABASE_EXPENSE}/${id}`)
      .then(() => getAndSetExpenseData());
  };

  useEffect(() => {
    getAndSetExpenseData();
    const interval = setInterval(() => getAndSetExpenseData(), 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card id='expenseDisplayCard'>
      <h1>Expense</h1>
      {
        allExpense.list.map((singleExpense) => (
          <Button
            key={singleExpense.id}
            onClick={() => handleClick(singleExpense.id)}
            text={`[${singleExpense.datetime}] $${singleExpense.amount}: ${singleExpense.comment}`}
          />
        ))
      }
    </Card>
  );
};

export default ExpenseDisplayCard;
