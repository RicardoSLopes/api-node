const BaseModel = require('./BaseModel');

class ShoppingList extends BaseModel{
    constructor(){
        super();
    }
    get(id) { // com static nao precisa instanciar a classe
        return this.db
            .collection('shoppingList')
            .doc(id)
            .get();
    }

    post(produto){
        return this.db
        .collection('shoppingList')
        .where('produto', '==', produto)
        .get();
    }
    
    put(id, data) {
        return this.db
            .collection('shoppingList')
            .where('produto', '==', produto)
            .where('quantidade', '==', quantidade)
            .set()
    }

}

module.exports = ShoppingList;