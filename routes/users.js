//consign torna obsoleto let express = require('express');
//consign torna obsoleto let routes = express.Router();

module.exports = (app)=> {//consign é como se tivesse uma func que recebe o app
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
});
app.post('/users', (req,res)=>{//podemos tirar /users e deixar só /admin
   res.json(req.body);
});
};