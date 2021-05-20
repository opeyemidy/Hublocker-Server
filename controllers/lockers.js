const lockersRouter = require('express').Router();
lockersRouter.get('/', async (request, response) => {
  response.send('hello locker!');
});
module.exports = lockersRouter;
