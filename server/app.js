const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:false}));
// Import all routes
const users = require('./routes/user');
app.use('/api/v1', users);

module.exports = app