const cacheManager = require('cache-manager');

// config
const { cache } = require('../config/default'); // destruct: https://medium.com/podiihq/destructuring-objects-in-javascript-4de5a3b0e4cb

//model
const UsersModel = require('../models/Users');
const usersModel = new UsersModel();


// instancia da biblioteca de cache
const memoryCache = cacheManager.caching(cache);

class Users{
    static get(request, response){
        const id = request.params.id;
        const key = `user_${id}`;

        memoryCache.get(key, (err, result) => {
            if (result){
                return response.json(result);
            }
            
            usersModel.get(id)
                .then(user => {
                    if(!user.exists) {
                        response
                        .sendStatus(204);
                    }
                    const userData = user.data();

                    memoryCache.set(key, userData);
                    response.json(userData);
                })
                .catch(err => {
                    response
                        .sendStatus(500);
                    console.log(err);
                    console.log('Error getting document', err);
                });
            
        });
    }

    static update(request, response) {
        const id = request.params.id;
        const key = `user_${id}`;
        memoryCache.ref('users/' + id).set({
            email: "Ricardo",
            name: "ricardo@gmail.com",
            password : "123"
        });
    }

    // static delete(request, response) {
        // request -> params e o body
    // }
}

module.exports = Users;