const express = require('express');
const router = express.Router();

//usuarios
router.get('/',async (req,res)=>{
  const users = {
	  id: 123,
	  nombre: "Pedro perez",
	  correo: "prueba@mail.com"
  };
  res.json(users)
});

module.exports = router;

