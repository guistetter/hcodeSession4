//Como estamos usando o consign para cuidar nas rotas, incluir no index
module.exports = {
    send: (err, req, res, code = 400)=>{
        console.log(`error:${err}`);
        res.status(code).json({
            error:err
        });
    }
};