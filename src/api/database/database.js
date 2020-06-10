const express = require('express');

const router = express.Router();

router
  .route('/income')
  .get((request, response) => {
    response.send('getset GET income');
  })
  .post((request, response) => {
    response.send('getset POST income');
  });

router
  .route('/expense')
  .get((request, response) => {
    response.send('getset GET expense');
  })
  .post((request, response) => {
    response.send('getset POST expense');
  });

module.exports = router;
