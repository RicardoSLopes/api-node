//import express from 'express'; tambem funciona
const express = require('express');

const app = express();

app.get('/usuarios', (request, response, next) =>{
    console.log("ENTREI NA ROTA USERS");
    //response.sendStatus(200);
    response.json({sucess: true})
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})
