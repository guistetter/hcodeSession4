//Poderiamos passar direto o app de um arquivo para outro, porem os recursos do express não estariam disponiveis
//como queremos todos os recursos da rota é melhor requirir o express e routes
//consign torna obsoleto let express = require ('express');
//consign torna obsoleto let routes = express.Router(); //

module.exports = (app) =>{
    app.get('/', (req, res)=>{//configurar rotas com express, ao substituir app por ouutes nao temos ele no outro arquivo index entao precisamos exportar
        res.statusCode = 200;
        res.setHeader('Content.type', 'text/html');//setamos o cabecalho para ter certeza que é um html assim não escrevemos a tag na tela.. ele interpreta
        res.end('<h1>Olá</h1>');
    });
};