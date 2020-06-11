/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const database = require('./database/database');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/database', database);

const hostname = 'localhost';
const port = 3000;
app.listen(port, hostname, (error) => {
  if (error) throw new Error(error);

  console.log(`'mymoney' REST API listening on http://${hostname}:${port}`);
});
