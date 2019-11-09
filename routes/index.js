const express = require('express');

const verifyToken = require('../middlewares/verifyToken');

// ROUTES
const users = require('./users');
const shoppingList = require('./shoppingList');

//instancia do router
const router = express.Router();
    
// Rotas base
router.use('/users', verifyToken, users);
router.use('/shoppingList', verifyToken, shoppingList);

//expoe as rotas
module.exports = router;