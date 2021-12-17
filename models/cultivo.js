const mongoose = require('mongoose');

const cultivoSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
});

module.exports=mongoose.model('Cultivo', cultivoSchema);