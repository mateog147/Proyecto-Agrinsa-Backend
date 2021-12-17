const express = require('express');
const jwt=require('jsonwebtoken');
const {config }= require('../config/config');
const router = express.Router();

router.post('/login',
  
  async (req, res, next) => {
    try {
      const { email, pwd }=req.body;
      //const rta = await (service.signToken(user));
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/recovery',
  async (req, res, next) => {
    try {
      const {email} = req.body;
      const rta = await service.sendRecovery(email);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/change-password',
  async (req, res, next) => {
    try {
      const { token,newPassword } = req.body;
      const rta = await service.changePassword(token,newPassword);
      res.json(rta);
    } catch (error) {
      next(error);
    }
  }
);



module.exports = router;
