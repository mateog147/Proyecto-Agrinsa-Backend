const mongoose = require('mongoose');

const cultivoSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    descripcion:{
        type:Number,
        required:true
    },
});

module.exports=mongoose.model('Cultivo', cultivoSchema);