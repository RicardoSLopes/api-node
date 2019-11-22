const express = require('express');

const router = express.Router();

const users = require('../controllers/Users');
router.get('/:id', users.get);
router.get('/', users.list);

module.exports = router;