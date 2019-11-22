const jwt = require('jsonwebtoken');
const config = require('../config/default');

module.exports = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        return res
            .status(401)
            .send({
                code: 'not_authorized',
                message: 'Not authorized'
        });
    }

    jwt.verify(token, config.secret, (error, decoded) => {
        if (error) {
            return res
                .status(500)
                .send({
                    auth: false,
                    message: 'Failed to authenticate token.'
            });
        }
<<<<<<< HEAD
=======

>>>>>>> 6f475e6d72b81af62d1ea93de0e372af243933fb
        next();
    })
}