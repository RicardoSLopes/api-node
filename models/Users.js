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
}

module.exports = Users;