const express = require('express');
const routerApi = require('./routes');
const path = require('path');
const mongoose = require('mongoose');
const {config} = require('./config/config');
//Swagger
/*const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Node MongoDB API",
            version: "1.0.0"
        },
    },
    apis: [`${path.join(__dirname, "./routes*.js")}`]
};*/

//settings
const app = express();
const port = config.port;
const IP = "10.0.0.14"; // esta es la ip de mi pc, para que en el cosole se vea

mongoose.connect(config.dbUrl)
    .then(()=>console.log('Conectado a mongo db atlas'))
    .catch((err)=>console.error(err));

//middlewares
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.json());
//app.use("/doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.get('/login', (req, res) => {
    res.send('LOGIN');
});

routerApi(app);
//SIEMPRE DESPUES DEL ROUTING

app.listen(port, () => {
    console.log("Corriendo en el puerto: ", port);
    console.log("http://" + IP + ":" + port + "/");
});
