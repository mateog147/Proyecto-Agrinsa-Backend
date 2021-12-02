const express = require('express');

const routerApi = require('./routes');


const app =  express();
const port =process.env.PORT || 3006;
const IP ="10.0.0.14"; // esta es la ip de mi pc

app.use(express.json());


app.get('/', (req,res)=>{
    res.send('HOME');
});

routerApi(app);
//SIEMPRE DESPUES DEL ROUTTTIINNNS

app.listen(port, ()=>{
    console.log("Corriendo en el puerto: ",port);
    console.log("http://"+ IP +":" + port + "/");
});
