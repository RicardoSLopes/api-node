const cacheManager = require('cache-manager');
const { cache } = require('../config/default');

const ShoppingListModel = require('../models/ShoppingList');
const shoppingListModel = new ShoppingListModel();

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
                        .status(404)
                        .send({
                            code: 404, 
                            message: 'Product not found.'
                        });
                    }
                    const productData = product.data();

                    memoryCache.set(key, productData);
                    response.json(productData);
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
}

module.exports = ShoppingList;