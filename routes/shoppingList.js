const express = require('express');

const router = express.Router();

const ShoppingList = require('../controllers/ShoppingList');
router.get('/:id', ShoppingList.get);

const ShoppingListAll = require('../controllers/ShoppingList');
router.get('', ShoppingListAll.list);

module.exports = router;