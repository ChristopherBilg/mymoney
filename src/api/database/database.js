module.exports = (app) => {
  app.get('/database', (request, response) => {
    response.send('database');
  });
};
