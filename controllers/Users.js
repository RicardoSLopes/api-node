const cacheManager = require('cache-manager');

const { cache } = require('../config/default');

const UsersModel = require('../models/Users');
const usersModel = new UsersModel();

const memoryCache = cacheManager.caching(cache);

class Users {
    static get(request, response) {
        const id = request.params.id;
        const key = `user_${id}`;

        memoryCache.get(key, (err, result) => {
            if (result) {
                return response.json(result);
            }

            usersModel.get(id)
                .then(user => {
                    if (!user.exists) {
                        response
                            .status(404)
                            .send({
                                code: 404,
                                message: 'User not found.'
                            });
                    }
                    const userData = user.data();

                    memoryCache.set(key, userData);
                    response.json(userData);
                })
                .catch(err => {
                    response
                        .status(500)
                        .send({
                            code: 500,
                            message: 'Internal Server Error.'
                        });
                });
        });
    }

    static list(request, response) {
        usersModel.list()
            .then(users => response.json(
                users.docs.map(users => (
                    {
                        ...users.data(),
                        id: users.id
                    }
                ))
            ))
            .catch(err => {
                response
                    .status(500)
                    .send({
                        code: 500,
                        message: 'Internal server error'
                    })
            })
    }
    static newUser(request, response){
        const age = request.body.age;
        const email = request.body.email;
        const name = request.body.name;
        const password = request.body.password;

        return usersModel.newUser(age, email, name, password)
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        })
    }
}

module.exports = Users;