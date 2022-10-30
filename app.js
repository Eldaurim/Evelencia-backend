const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const authenticationRoutes = require('./routes/authentication');
const userRoutes = require('./routes/user');''

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@accounts.t0c7voa.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/', authenticationRoutes);
app.use('/account', userRoutes);

module.exports = app;