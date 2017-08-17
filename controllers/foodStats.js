const express = require('express');
const router = express.Router();
const food = require('../models/foodStats.js');

router.get('/', (req, res)=>{
    food.find({}, (err, foundFood)=>{
        res.json(foundFood);
    });//close food find
});//close router get
router.post('/', (req, res)=>{
  console.log(req.body)
    food.create(req.body, (err, createdFood)=>{
        res.json(createdFood);
    });//close food create
});//close router post
router.delete('/:id', (req, res)=>{
    food.findByIdAndRemove(req.params.id, (err, deletedFood)=>{
        res.json(deletedFood);
    });//close findByIdAndRemove
});//close router delete
router.put('/:id', (req, res)=>{
    food.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedfood)=>{
        res.json(updatedfood);
    });//close findByIdAndUpdate
});//close router put
module.exports = router;
