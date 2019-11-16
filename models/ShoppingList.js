const BaseModel = require('./BaseModel');

class ShoppingList extends BaseModel{
    constructor(){
        super();
    }
    get(id) {
        return this.db
            .collection('shoppingList')
            .doc(id)
            .get();
    }
}

module.exports = ShoppingList;