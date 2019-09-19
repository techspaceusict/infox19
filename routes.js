let router=require('express').Router();
let {registerUser,contact}=require('./apis');

router.post('/register',registerUser);
router.post('/contact',contact);

module.exports=router;