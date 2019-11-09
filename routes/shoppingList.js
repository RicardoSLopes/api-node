const express = require('express');

// ROUTES
const router = express.Router();

//CONTROLLER
const ShoppingList = require('../controllers/ShoppingList');

router.get('/:id', ShoppingList.get);

module.exports = router;