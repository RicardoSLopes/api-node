const express = require('express');

const router = express.Router();

const Users = require('../controllers/Users');

router.get('/:id', Users.get);

module.exports = router;