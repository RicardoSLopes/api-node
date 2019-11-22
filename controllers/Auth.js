const UsersModel = require('../models/Users');
const usersModel = new UsersModel();
const createToken = require('../utils/createToken');

class Auth {
    static post({ body }, response, next) {

        const {email, password} = body;
        
        usersModel.post(email, password)
            .then(users => {
                if (users.docs.length === 0) {
                    return response
                        .status(200)
                        .send({
                            code: 'not_found',
                            message: 'user not found'
                        });
                }

                const [{ id }] = users.docs;
                response.json({ token: createToken({ id }) });
            })
            .catch(err => {
                response
                .status(500)
                .send({
                    code: 500,
                    message: 'Internal Server Error.'
                });
            });
    }
}

module.exports = Auth;