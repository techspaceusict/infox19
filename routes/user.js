let router=require('express').Router();
const userModel=require('../models/userModel');

router.get('/',userModel.hero);

module.exports=router;