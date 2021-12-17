const mongoose = require('mongoose');

const predioSchema=mongoose.Schema({
    area:{
        type:Number,
        required:true
    },
    ubicacion:{
        type:String,
        required:true
    },
    responsable:{
        type:String,
        required:true
    },
});

module.exports=mongoose.model('Predio', predioSchema);