/* eslint-disable no-console */
const express = require('express');
const storage = require('node-persist');
const { v4: uuidv4 } = require('uuid');

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
        response.send(data || []);
      })
      .catch((error) => {
        response.send(error);
      });
  })
  .post((request, response) => {
    storage
      .getItem(incomeDatabaseKey)
      .then((data) => {
        const entry = {
          id: uuidv4(),
          amount: request.body.amount,
          comment: request.body.comment,
          datetime: request.body.datetime,
        };

        if (data) return storage.setItem(incomeDatabaseKey, [...data, entry]);
        return storage.setItem(incomeDatabaseKey, [entry]);
      })
      .then(() => response.send('Success'))
      .catch((error) => response.send(error));
  });

router
  .route(`${incomeRoute}/:id`)
  .delete((request, response) => {
    const { id } = request.params;
    storage
      .getItem(incomeDatabaseKey)
      .then((data) => {
        if (!data) return null;

        const list = data.filter((entry) => entry.id !== id);
        if (!list) return null;

        return storage.setItem(incomeDatabaseKey, list);
      })
      .then(() => response.send('Success'))
      .catch((error) => response.send(error));
  });

// Expense router
router
  .route(expenseRoute)
  .get((request, response) => {
    storage
      .getItem(expenseDatabaseKey)
      .then((data) => {
        response.send(data || []);
      })
      .catch((error) => {
        response.send(error);
      });
  })
  .post((request, response) => {
    storage
      .getItem(expenseDatabaseKey)
      .then((data) => {
        const entry = {
          id: uuidv4(),
          amount: request.body.amount,
          comment: request.body.comment,
          datetime: request.body.datetime,
        };

        if (data) return storage.setItem(expenseDatabaseKey, [...data, entry]);
        return storage.setItem(expenseDatabaseKey, [entry]);
      })
      .then(() => response.send('Success'))
      .catch((error) => response.send(error));
  });

router
  .route(`${expenseRoute}/:id`)
  .delete((request, response) => {
    const { id } = request.params;
    storage
      .getItem(expenseDatabaseKey)
      .then((data) => {
        if (!data) return null;

        const list = data.filter((entry) => entry.id !== id);
        if (!list) return null;

        return storage.setItem(expenseDatabaseKey, list);
      })
      .then(() => response.send('Success'))
      .catch((error) => response.send(error));
  });

module.exports = router;
