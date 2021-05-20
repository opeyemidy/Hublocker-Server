const lockersRouter = require('express').Router();
const Locker = require('../models/locker');

lockersRouter.get('/', async (request, response) => {
  const lockers = await Locker.find();

  response.json(lockers.map((locker) => locker.toJSON()));
});

lockersRouter.get('/:name', async (request, response) => {
  request.params.name;
  const lockers = await Locker.find({
    $or: [{ state: request.params.name }, { city: request.params.name }],
  });
  if (lockers) {
    response.json(lockers.map((locker) => locker.toJSON()));
  } else {
    response.status(404).end();
  }
});

module.exports = lockersRouter;
