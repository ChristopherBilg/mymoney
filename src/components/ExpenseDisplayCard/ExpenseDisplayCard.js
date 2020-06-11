import React, { useState, useEffect } from 'react';
import { Card } from '@blueprintjs/core';
import axios from 'axios';

import './ExpenseDisplayCard.css';

const ExpenseDisplayCard = () => {
  const [allExpense, setAllExpense] = useState({ list: [] });

  useEffect(() => {
    axios
      .get('http://localhost:3000/database/expense')
      .then((data) => setAllExpense({ list: data.data }));
  }, []);

  return (
    <Card id='expenseDisplayCard'>
      <h1>Expense</h1>
      {allExpense.list.map((singleExpense) => (
        <div>
          [{singleExpense.id}] ${singleExpense.amount}: {singleExpense.comment}
        </div>
      ))}
    </Card>
  );
};

export default ExpenseDisplayCard;
