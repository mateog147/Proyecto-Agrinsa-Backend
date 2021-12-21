const express = require('express');
const router = express.Router();
const usuariosRouter = require('./usuarios.router');
const loginRouter = require('./login.router');
const prediosRouter = require('./predios.router');
const cultivosRouter = require('./cultivos.router');

router.use('/Login', loginRouter);
router.use('/Usuarios', usuariosRouter);
router.use('/Predios' , prediosRouter);
router.use('/Cultivos', cultivosRouter);

module.exports=router;
