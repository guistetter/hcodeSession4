let express = require('express');
let routes = express.Router();

routes.get('/', (req, res)=>{//podemos tirar o users e deixar só /, referenciamos 'users' no use do index.js
    res.statusCode = 200;
    res.setHeader('Content.type', 'application/json');
    res.json ({// não é necessario JSON.stringify
        users:[{
            name: 'hcode',
            email:'contato',
            id: 1
        }]
    });
});
routes.get('/admin', (req,res)=>{//podemos tirar /users e deixar só /admin
    res.statusCode = 200;
    res.setHeader('Content.type', 'application/json');
    res.json ({// não é necessario JSON.stringify
        users:[{
            name: 'outra',
            email:'coisa',
            id: 333
        }]
    });
});
module.exports = routes;