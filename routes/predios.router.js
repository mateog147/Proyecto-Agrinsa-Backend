const express = require('express');
const router = express.Router();

//predios
router.get('/',async (req,res)=>{
    const predios = [ 
        {id: 1,
        area: 12,
        ubicación:'Latitud: 6.217 Longitud: -75.567 Latitud: 6° 13 1 Norte Longitud: 75° 34 1 Oeste',
        responsable: 1
        },
        {id: 2,
        area: 40,
        ubicación: 'Latitud 6.017 Longitud -75.417 6 1 1 Norte 75 25 1 Oeste',
        responsable: 1
        }
        ]
        
        ;
    res.json(predios)
});

module.exports = router;