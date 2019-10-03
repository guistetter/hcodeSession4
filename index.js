const express = require('express');//carregamos modulo http

let server = http.createServer((req, res)=>{
asdasdasdasdas
    console.log('url:', req.url);
    console.log('method:', req.method);
    switch(req.url){ //rotas urls..
        case'/':
        res.statusCode = 200;
        res.setHeader('Content.type', 'text/html');//setamos o cabecalho para ter certeza que é um html assim não escrevemos a tag na tela.. ele interpreta
        res.end('<h1>Olá</h1>');
        break;
        case '/users':
        res.statusCode = 200;
        res.setHeader('Content.type', 'application/json');
        res.end(JSON.stringify({//convertendo js para json
            users:[{
                name: 'hcode',
                email:'contato',
                id: 1
            }]
        }));
    }

});

server.listen(3000, '127.0.0.1', ()=>{
    console.log('servidor rodando');
})