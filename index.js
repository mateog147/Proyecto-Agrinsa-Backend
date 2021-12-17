const express = require('express');
const routerApi = require('./routes');
const path = require('path');

//Swagger
const swaggerUI = require('swagger-ui-express');
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
};

//settings
const app = express();
const port = process.env.PORT || 3006;
const IP = "192.168.1.4"; // esta es la ip de mi pc
require('./config/database');

//middlewares
app.use(express.json());
app.use(express.static())
app.use("/doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));


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
