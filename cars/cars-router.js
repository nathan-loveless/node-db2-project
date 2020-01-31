const express = require('express');
const db = require('../data/db-config');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cars = await db('cars');
        db('cars')
        res.status(200).json(cars);
    } catch(err) {
        res.status(500).json({ message: 'Failed to retrieve car inventory' });
    }
  });

  router.get('/:id',  async (req, res) => {
    const {id} = req.params;
    try {
        const car = await db('cars').where('id', id);
        res.status(200).json(car);
    } catch(err) {
        res.status(500).json({ message: 'Failed to retrieve selected car' });
    }
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

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const updateRow = await db('cars').where('id', id).update(req.body);
        res.status(200).json({updated: updateRow});
    } catch {
        res.status(500).json({message: 'Failed to update car'});
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const deleteRow = await db('cars').where('id', id).del();
        res.json({deletedRecords: deleteRow})
    }
    catch {
        res.status(500).json({message: "Failded to delete car"});
    }    
});


module.exports = router;