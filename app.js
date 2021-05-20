const config = require('./utils/config.js');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('express-async-errors');
const cors = require('cors');
const lockersRouter = require('./controllers/lockers');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');

logger.info('connecting to', config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

app.use('/api/lockers', lockersRouter);

app.use(middleware.unknownEndpoint);

module.exports = app;
