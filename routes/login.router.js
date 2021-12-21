const express = require('express');
const User = require('../models/user');
const router = express.Router();

//Post Login
router.post('/',async (req,res)=>{
  const user = await User.findOne({ id: req.query.userID });
  if(user){
        if(user.password === req.query.password){
            res.status(200).json({
                id: user.id,
                username: user.username,
                tipo: user.tipo
            });
        }else
            res.status(401).send('Usuario y/o contraseña incorrectas');
  }else
    res.status(401).send('Usuario y/o contraseña incorrectas');
});

module.exports = router;