//import express from 'express'; tambem funciona
const express = require('express');

//JWT
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const createToken = require('./utils/createToken')
const verifyToken = require('./middlewares/verifyToken')

const Auth = require('./controllers/Auth');
app.post('/auth', Auth.list);

const Users = require('./controllers/Users');
app.get('/users/:id', /*verifyToken,*/ Users.get);


app.get('/users', (request, response, next) =>{

    db.collection('users').get()
    // .then(users =>{
    //     var list = [];
    //     users.forEach(doc => {
    //         console.log('doc =', doc.data());
    //         list.push(doc.data());
    //     });
    //     response.json(list);

        .then(users => response.json(
            users.docs.map(user => ({
                ...user.data(),
                od: user.id,
            }))
            ))


    .catch(err => {
        response
            .sendStatus(500);
        console.log(err);
        console.log('Error getting document', err);
    });


    console.log("ENTREI NA ROTA USERS");
    //response.sendStatus(200);
    //response.json({sucess: true})
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
