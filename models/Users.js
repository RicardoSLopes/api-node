const BaseModel = require('./BaseModel');

class Users extends BaseModel {
    constructor() {
        super();
    }
    get(id) {
        return this.db
            .collection('users')
            .doc(id)
            .get();
    }

    list(conditions = []) {
        let collection = this.db.collection('users')
        conditions.forEach(({ field, condition, value }) => collection = collection.where(field, condition, value));
        return collection.get();
    }

    post(email, password) {
        return this.db
            .collection('users')
            .where('email', '==', email)
            .where('password', '==', password)
            .get();
    }
}

module.exports = Users;