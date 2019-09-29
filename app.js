const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const userRoutes=require('./routes');
const cors=require('cors');

require('dotenv').config();
const PORT=process.env.PORT || 5000;

app.use(cors({
    origin:JSON.parse(process.env.REMOTE_URL),
    credentials:true
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());


app.use('/',userRoutes);

app.listen(PORT,()=>{
    console.log(`Connected to ${PORT}`);
})