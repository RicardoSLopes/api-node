const BaseModel = require('./BaseModel');

class ShoppingList extends BaseModel {
    constructor() {
        super();
    }
    
    get(id) {
        return this.db
            .collection('shoppingList')
            .doc(id)
            .get();
    }

    list(conditions = []) {
        let collection = this.db.collection('shoppingList')
        conditions.forEach(({ field, condition, value }) => collection = collection.where(field, condition, value));
        return collection.get();
    }
}

module.exports = ShoppingList;