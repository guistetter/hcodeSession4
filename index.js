const express = require('express');//carregamos modulo http
let app = express(); 

app .get('/', (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content.type', 'text/html');//setamos o cabecalho para ter certeza que é um html assim não escrevemos a tag na tela.. ele interpreta
    res.end('<h1>Olá</h1>');
});

app.get('/users', (req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content.type', 'application/json');
    res.json ({// não é necessario JSON.stringify
        users:[{
            name: 'hcode',
            email:'contato',
            id: 1
        }]
    });
})

app.listen(3000, '127.0.0.1', ()=>{
    console.log('servidor rodando');
})