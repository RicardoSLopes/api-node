//import express from 'express'; tambem funciona
const express = require('express');

//FIREBASE
const firebase = require('firebase');
const firebaseConfig = require('./config/firebase');

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();



const app = express();

app.get('/users/:id', (request, response, next) => {
    const id = request.params.id;
    
    db.collection('users').doc(id).get()
    .then(user =>{
       if(!user.exists){
           response
                .sendStatus(404); 
            //.send({ message: 'Not Found' });
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
