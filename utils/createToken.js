const jwt = require('jsonwebtoken');
const config = require('../config/default');

module.exports = (data, expiresIn = 300) => {
    return jwt.sign(
        data,
        config.secret,
        {expiresIn}
    );
}