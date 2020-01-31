const express = require('express');
const carsRouter = require('./cars/cars-router');
const server = express();
server.use(express.json());

server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
    res.send('<h3>DB Node Project 2</h3>');
  });

module.exports = server;