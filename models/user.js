const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema(
{
    id:         { type:Number, required:true },
    username:   { type:String, required:true },
    password:   { type:String, required:true },
    tipo:       { type:Number, required:true },
});

module.exports = mongoose.model('users',UserSchema);