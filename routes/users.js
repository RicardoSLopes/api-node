const express = require('express');

// ROUTES
const router = express.Router();

//CONTROLLER
const Users = require('../controllers/Users');

router.get('/:id', Users.get);

module.exports = router;