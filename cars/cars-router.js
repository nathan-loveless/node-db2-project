const express = require('express');
const db = require('../data/db-config');

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
      res.json(cars); 
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to retrieve car inventory' });
    });
  });

  router.get('/:id', (req, res) => {
    const {id} = req.params;
  
    db('cars').where('id', id)
    .then(car => {
      res.json(car);
    }) 
    .catch (err => {
      res.status(500).json({ message: 'Failed to retrieve selected car' });
    });
  });

  router.post('/', async (req, res) => {
    const carData = req.body;
    try {
        const car = await db('cars').insert(carData);
        res.status(201).json(car);
    } catch {
        res.status(500).json({message: 'Failed to insert car'});
    }
});


module.exports = router;