const express = require('express');

const router = express.Router();

const users = require('../controllers/Users');
router.get('/:id', users.get);

const allUsers = require('../controllers/Users');
router.get('', allUsers.list);

module.exports = router;