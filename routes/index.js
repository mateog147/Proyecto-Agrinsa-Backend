const express = require('express');

const usuariosRouter = require('./usuarios.router');
const prediosRouter = require('./predios.router');
const cultivossRouter = require('./cultivos.router');


function routerApi(app){
  const router = express.Router();
  app.use('/dashboard', router);
  router.get('/', (req,res)=>{
    res.send('DASHBOARD');
  });
    router.use('/usuarios', usuariosRouter);
    router.use('/predios', prediosRouter);
    router.use('/cultivos', cultivossRouter);
}

module.exports=routerApi;
