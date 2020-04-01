const express = require('express');
const route = express.Router();

route.get('/factorial', (req, res) => {
    //res.send('vamos bien')
    res.render('parcial/factorial')
})

route.post('/factorial', (req, res) => {
    const { n1, n2 } = req.body;
    numeritos = {
        n1,
        n2
    }

    let suma = n1 + n2;

    console.log(suma)

    console.log(numeritos)
    res.redirect('factorial')
})


module.exports = route;