const express = require('express');
const router = express.Router();

const predioSchema = require('../models/predio')


//predios
router.get('/',async (req,res)=>{
    try {
        const predios = await predioSchema.find();
        res.json(predios)
    } catch (error) {
        res.json({message:err})
    }
});

//obtener un predio por ID
router.get('/:id',async (req,res)=>{
    try {
        const { id }=req.params;
        const predio = await predioSchema.findById(id);
        res.json(predio);
    } catch (error) {
        res.json({message:error});
    }
});
//crear un predio
router.post('/',async (req, res)=>{
    try {
        const nuevopredio = predioSchema(req.body);
        await nuevopredio.save();
        res.status(201).json(nuevopredio);
    } catch (error) {
        res.json({message:error})
    }
});

//modificar un predio 
router.put('/:id',async (req,res)=>{
    try {
        const { id }=req.params;
        const {nombre, descripcion} = (req.body);
        const predio = await predioSchema.updateOne({_id:id},{$set:{nombre, descripcion}});
        res.json(user);
    } catch (error) {
        res.json({message:error});
    }
});
module.exports = router;