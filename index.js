//import express from 'express'; tambem funciona
const express = require('express');

//FIREBASE
const firebase = require('firebase');
const firebaseConfig = require('./config/firebase');

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();



//JWT
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const createToken = require('./utils/createToken')
const verifyToken = require('./middlewares/verifyToken')


app.post('/auth', (request, response, next) =>{
    console.log(request.body);

    db.collection('users')
    .where('email', '==', request.body.email)
    .where('password', '==', request.body.password)
    .get()
    .then(users => {
        if(users.docs.length === 0){
            return response
            .status(200)
            .send({ 
                code: 'not_found', 
                message: 'user not found'
            });
        }

        //auto assign
        const [{id}] = users.docs;
        response.json({ token: createToken({id})});
    })
    .catch(err => {
        response
            .sendStatus(500);
        console.log(err);
        console.log('Error getting document', err);
    });

});


app.get('/users/:id', verifyToken, (request, response, next) => {
    const id = request.params.id;
    
    db.collection('users').doc(id).get()
        .then(user => {
            if(!user.exists) {
                response
                    .sendStatus(404);
                    //.send({ message: 'No Content' });
            }

            response.json(user.data());
        })
        .catch(err => {
            response
                .sendStatus(500);
            console.log(err);
            console.log('Error getting document', err);
        });
});


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
