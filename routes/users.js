const express = require('express');

const router = express.Router();

const users = require('../controllers/Users');
router.get('/:id', users.get);
router.get('/', users.list);
<<<<<<< HEAD
=======
router.post('/', users.create);
>>>>>>> 6f475e6d72b81af62d1ea93de0e372af243933fb

module.exports = router;