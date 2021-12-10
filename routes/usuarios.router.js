const express = require('express');
const router = express.Router();

//usuarios
router.get('/',async (req,res)=>{
  const users = [ 
    {'id': 1,
    'nombre': 'Pedro',
    'apellido':'Perez',
    'email': 'ejemplo@mail.com',
    'rol': 'administrador'
    },
    {'id': '2',
    'nombre': 'Juana',
    'apellido':'Jimenez',
    'email': 'ejemplo2@mail.com',
    'rol': 'configuracion'
    },
  ];            
  res.json(users)
});

module.exports = router;

