const BaseModel = require('./BaseModel');

class Users extends BaseModel{
    constructor(){
        super();
    }
    get(id) { // com static nao precisa instanciar a classe
        return this.db
            .collection('users')
            .doc(id)
            .get();
    }

    post(email, password){
        return this.db
        .collection('users')
        .where('email', '==', email)
        .where('password', '==', password)
        .get();
    }
}

module.exports = Users;