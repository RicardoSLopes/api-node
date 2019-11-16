const UsersModel = require('../models/Users');
const usersModel = new UsersModel();
const createToken = require('../utils/createToken');

class Auth{
   static post(request, response, next){

    const email = request.body.email;
    const password = request.body.password;

        usersModel.post(email, password)
        .then(users => {
            if(users.docs.length === 0){
                return response
                .status(200)
                .send({ 
                    code: 'not_found', 
                    message: 'user not found'
                });
            }
            
            const [{ id }] = users.docs;
            response.json({ token: createToken({ id })});
        })
        .catch(err => {
            response
                .sendStatus(500);
        });
   }
}

module.exports = Auth;