const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const userRoutes=require('./routes/user');
require('dotenv').config();
const PORT=process.env.PORT || 5000;

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',userRoutes);

app.listen(PORT,()=>{
    console.log(`Connected to ${PORT}`);
})