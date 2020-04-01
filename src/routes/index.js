const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.send('hola');
});

module.exports = route;