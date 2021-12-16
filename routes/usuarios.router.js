const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


const userSchema = require('../models/usuario');
//Crear un usuario
router.post('/usuarios', (req,res)=>{
  const datos = req.body;
  const hash = await bcrypt.hash(data.password,10);
  const newUser = userSchema({
    ...datos,
    clave:hash
  });
  newUser.save()
          .then((data)=>{
              console.log('Almacenado')
              res.json(data)})
          .catch((err)=>res.json({message:err}))
});

//consulta  al base de datos
router.get('/usuarios',async (req,res)=>{
  try {
      const data = await userSchema.find();
  res.json(data)
  } catch (error) {
      res.json({message:err})
  }
  
});

//encontrar un usuario especifico
router.get('/usuarios/:id',async (req,res)=>{
  try {
      const { id }=req.params;
      const user = await userSchema.findById(id);
      res.json(user);
  } catch (error) {
      res.json({message:error});
  }
});

//modificar un objeto con PUT
router.put('/usuarios/:id',async (req,res)=>{
  try {
      const { id }=req.params;
      const {nombre, email, rol} = (req.body);
      const user = await userSchema.updateOne({_id:id},{$set:{nombre, email, rol}});
      res.json(user);
  } catch (error) {
      res.json({message:error});
  }
  
});

//eliminar por id con DELETE
router.delete('/usuarios/:id',async (req,res)=>{
  try {
      const { id }=req.params;
      const data = await userSchema.remove({_id:id});
      res.json(data);
  } catch (error) {
      res.json({message:error});
  }
});

module.exports=router;