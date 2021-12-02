const usersRouter = require('./users.router');


function routerApi(app){
  app.use('/users', usersRouter); //aca creamos una ruta maestra

}


module.exports=routerApi;
