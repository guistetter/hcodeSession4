module.exports = {
    user:(app, req, res)=>{
    req.assert('name','O nome é obrigatorio' );//validacao com express
    req.assert('email', 'o e-mail é obrigatorio').notEmpty().isEmail()
 
    let errors = req.validationErrors();//tratar erro express
    if(errors){
     app.utils.error.send(errors, req, res);
     return false; //paramos a execucao para caso de erro nao fazer o insert
    }
    else {
        return true;
    }
}
};