const express = require('express');
const router = express.Router();

//cultivos
router.get('/',async (req,res)=>{
    const cultivos = [ 
            {'id': 1,
            'nombre': 'papas',
            'descripción':'papa nevada '
            },
            {'id': 2,
            'nombre': 'arroz',
            'descripción':'arroz comun'
            },
            {'id': 3,
            'nombre': 'maiz',
            'descripción':'maiz comun  '
            },
        ];
    res.json(cultivos)
});

module.exports = router;