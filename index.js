const express = require('express');//carregamos modulo http
const consign = require('consign');//substitui require, use..
let app = express();

consign().include('routes').into(app);

app.listen(3000, '127.0.0.1', ()=>{
    console.log('servidor rodando');
})