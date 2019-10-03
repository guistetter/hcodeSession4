//consign torna obsoleto let express = require('express');
//consign torna obsoleto let routes = express.Router();
let NeDB = require('nedb');
let db = new NeDB({ //configurando o banco
    filename:'users.db',
    autoload:true
});
module.exports = (app)=> {//consign é como se tivesse uma func que recebe o app
    let route = app.route('/users');//rota padrao, assim não precisamos ficar escrevendo toda hora a rota

    route.get((req, res)=>{
        db.find({}).sort({name:1}).exec((err, users)=>{
            //encontrar usuarios, orderar por nome e crescente se fosse o oposto seria -1
        if(err){
            app.utils.error.send(err, req, res, 400);
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({
                users: users
            });

        }
    });
});

route.post((req,res)=>{
   
   db.insert(req.body, (err, user)=>{
       if(err){
          app.utils.error.send(err, req, res, 400);
       } else {
           res.status(200).json(user);
       }
   });
});
};