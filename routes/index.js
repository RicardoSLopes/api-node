const express = require('express');

const verifyToken = require('../middlewares/verifyToken');

const Auth = require('../controllers/Auth');
const users = require('./users');
const shoppingList = require('./shoppingList');

const router = express.Router();

router.use('/auth',Auth.post);
router.use('/users', verifyToken, users);
router.use('/shoppingList', verifyToken, shoppingList);

module.exports = router;