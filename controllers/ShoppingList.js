const cacheManager = require('cache-manager');

// config
const { cache } = require('../config/default'); // destruct: https://medium.com/podiihq/destructuring-objects-in-javascript-4de5a3b0e4cb

//model
const ShoppingListModel = require('../models/ShoppingList');
const shoppingListModel = new ShoppingListModel();


// instancia da biblioteca de cache
const memoryCache = cacheManager.caching(cache);

class ShoppingList{
    static get(request, response){
        const id = request.params.id;
        const key = `product_${id}`;

        memoryCache.get(key, (err, result) => {
            if (result){
                return response.json(result);
            }
            
            shoppingListModel.get(id)
                .then(product => {
                    if(!product.exists) {
                        response
                        .sendStatus(204);
                    }
                    const productData = product.data();

                    memoryCache.set(key, productData);
                    response.json(productData);
                })
                .catch(err => {
                    response
                        .sendStatus(500);
                    console.log(err);
                    console.log('Error getting document', err);
                });
            
        });
    }

}

module.exports = ShoppingList;