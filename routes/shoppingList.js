const express = require('express');

const router = express.Router();

const ShoppingList = require('../controllers/ShoppingList');
router.get('/:id', ShoppingList.get);
router.get('/', ShoppingList.list);

module.exports = router;