/* eslint-disable no-console */
const express = require('express');

const app = express();
require('./database/database')(app);

const hostname = 'localhost';
const port = 3000;
app.listen(port, hostname, () => {
  console.log(`'mymoney' REST API listening on http://${hostname}:${port}`);
});
