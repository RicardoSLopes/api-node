const express = require('express');

const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(routes);

const Auth = require('./controllers/Auth');
app.post('/auth',Auth.post);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

const Users = require('./controllers/Users');
app.get('/users/:id', Users.get);

const ShoppingList = require('./controllers/ShoppingList');
app.get('/ShoppingList/:id', ShoppingList.get);







