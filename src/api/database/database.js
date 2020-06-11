/* eslint-disable no-console */
const express = require('express');
const storage = require('node-persist');

const incomeDatabaseKey = 'income';
const expenseDatabaseKey = 'expense';
const incomeRoute = '/income';
const expenseRoute = '/expense';

const router = express.Router();
storage
  .init()
  .then(() => console.log('node-persist storage initialized.'))
  .catch((error) => console.log('Error:', error));

// Income router
router
  .route(incomeRoute)
  .get((request, response) => {
    storage
      .getItem(incomeDatabaseKey)
      .then((data) => {
        response.send(data);
        console.log(request.ip, ': requested income =', data);
      })
      .catch((error) => {
        response.send(error);
      });
  })
  .post((request, response) => {
    storage
      .getItem(incomeDatabaseKey)
      .then((data) => {
        const newIncomeEntry = {
          amount: request.body.amount,
          comment: request.body.comment,
        };
        storage.updateItem(incomeDatabaseKey, [...data, newIncomeEntry]);
      })
      .catch((error) => {
        response.send(error);
      });
  });

// Expense router
router
  .route(expenseRoute)
  .get((request, response) => {
    storage
      .getItem(expenseDatabaseKey)
      .then((data) => {
        response.send(data);
        console.log(request.ip, ': requested expense =', data);
      })
      .catch((error) => {
        response.send(error);
      });
  })
  .post((request, response) => {
    storage
      .getItem(expenseDatabaseKey)
      .then((data) => {
        const newExpenseEntry = {
          amount: request.body.amount,
          comment: request.body.comment,
        };
        storage.updateItem(expenseDatabaseKey, [...data, newExpenseEntry]);
      })
      .catch((error) => {
        response.send(error);
      });
  });

module.exports = router;
