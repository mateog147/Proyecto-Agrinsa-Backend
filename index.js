require('./config/database');
const express = require('express');
const bodyParser = require('body-parser');
const routingModule = require('./routes/index');

//settings
const app = express();
const port = process.env.PORT || 3006;
const IP = "localhost"; // esta es la ip de mi pc

//middlewares
app.use(bodyParser.json());

//routes
app.get('/',(req, res) => {
    res.send("API Home");
});

app.use('/api',routingModule);

app.listen(port, () => {
    console.log("Corriendo en el puerto: ", port);
    console.log("http://" + IP + ":" + port + "/");
});
