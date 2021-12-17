const express = require('express');
const router = express.Router();

const cultivoSchema = require('../models/cultivo')


//cultivos
router.get('/',async (req,res)=>{
    try {
        const cultivos = await cultivoSchema.find();
        res.json(cultivos)
    } catch (error) {
        res.json({message:err})
    }
});

//obtener un cultivo por ID
router.get('/:id',async (req,res)=>{
    try {
        const { id }=req.params;
        const cultivo = await cultivoSchema.findById(id);
        res.json(cultivo);
    } catch (error) {
        res.json({message:error});
    }
});
//crear un cultivo
router.post('/',async (req, res)=>{
    try {
        const nuevoCultivo = cultivoSchema(req.body);
        await nuevoCultivo.save();
        res.status(201).json(nuevoCultivo);
    } catch (error) {
        res.json({message:error})
    }
});

//modificar un cultivo 
router.put('/:id',async (req,res)=>{
    try {
        const { id }=req.params;
        const {nombre, descripcion} = (req.body);
        const cultivo = await cultivoSchema.updateOne({_id:id},{$set:{nombre, descripcion}});
        res.json(user);
    } catch (error) {
        res.json({message:error});
    }
});
module.exports = router;