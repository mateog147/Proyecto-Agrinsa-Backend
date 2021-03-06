const express = require('express');

const usuariosRouter = require('./usuarios.router');
const prediosRouter = require('./predios.router');
const cultivossRouter = require('./cultivos.router');


function routerApi(app){
  const router = express.Router();
  app.use('/api', router);
  router.get('/login', (req,res)=>{
    res.send('');
  });
    router.use('/usuarios', usuariosRouter);
    router.use('/predios', prediosRouter);
    router.use('/cultivos', cultivossRouter);
}

module.exports=routerApi;
