const express = require('express');
const router = express.Router();
const Data = require('../Models/Data');

//Get all data
router.get('/', async (req, res) => {
  try {
    const posts = await Data.find();
    res.json(posts);
  } catch (err) {
    res.json({message: err});
  }
});

//Submit a data
router.post('/', async (req, res) => {
  try {
    const title = req.body.title;
    const price = req.body.price;
    const data = new Data({
      title: title,
      price: parseInt(price)
    });
    const savedData = await data.save();
    res.json(savedData);
  } catch (err) {
    res.json({message: err});
  }
});

//Get specific data
router.get('/:id', async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    res.json(data);
  } catch (err) {
    res.json({message: err});
  }
});

//Delete specific data
router.delete('/:id', async (req, res) => {
  try {
    const removed = await Data.deleteOne({_id: req.params.id});
    res.json(removed);
  } catch (err) {
    res.json({message: err});
  }
});

//Update specific data
router.patch('/:id', async (req, res) => {
  console.log(req.body);
  try {
    const title = req.body.title;
    const price = req.body.price;
    const updated = await Data.updateOne(
      {_id: req.params.id},
      {$set: {title: title, price: parseInt(price)}}
    );
    res.json(updated);
  } catch (err) {
    res.json({message: err});
  }
});

module.exports = router;
