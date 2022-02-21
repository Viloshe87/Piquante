const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Connexion a mongo db //
mongoose.connect('mongodb+srv://piquante:wilodatabase@cluster0.1xlld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
   {
      useNewUrlParser: true,
      useUnifiedTopology: true
   })
   .then(() => console.log('Connexion à MongoDB réussie !'))
   .catch(() => console.log('Connexion à MongoDB échouée !'));

//Middleware pour acceder a l'API depuis n'importe quelle origine
   app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
      next();
    });

module.exports = app;