const express = require('express');//carregamos modulo http
const consign = require('consign');//substitui require, use..
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(expressValidator());

consign().include('routes').include('utils').into(app);

app.listen(3000, '127.0.0.1', ()=>{
    console.log('servidor rodando');
})