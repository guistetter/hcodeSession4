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
    if(!app.utils.validator.user(app, req, res)) return false;

   db.insert(req.body, (err, user)=>{
       if(err){
          app.utils.error.send(err, req, res, 400);
       } else {
           res.status(200).json(user);
       }
   });
});

//rota para pesquisar por um unico usuario
    let routeId = app.route('/users/:id');
    routeId.get((req, res) => {
        db.findOne({_id:req.params.id}).exec((err, user)=>{//encontrar um registro
            if(err){
                app.utils.error.send(err, req, res, 400);
            } else {
               res.status(200).json(user);
            }
        });
    })

    //rota para alterar
    routeId.put((req, res) => {
        if(!app.utils.validator.user(app, req, res))return false;

        //req.body passamos os dados, igual qdo fizemos para inserir
        db.update({_id:req.params.id}, req.body, err =>{
            if(err){
                app.utils.error.send(err, req, res, 400);
            } else {
               res.status(200).json(Object.assign(req.params, req.body));//Com req.body obtemos os dados do usuario porem não temos o id, com o req.params nos temos o id e nao os dados, juntamos com assign
            }
        });
    })
    routeId.delete((req, res)=>{
        //o id do banco = id que vem como parametro
        db.remove({_id: req.params.id},{}, err=>{
            if(err){
                app.utils.error.send(err, req, res, 400);
            } else {
               res.status(200).json(req.params);//retorn o id exlcuido
            }
        });
    })
};





