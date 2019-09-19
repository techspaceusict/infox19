let {registerModel,contactsModel,connect}=require('./schema');
connect();
registerModel=registerModel();contactsModel=contactsModel();

module.exports={
    registerUser:async (req,res)=>{
        let {eventName,email,name,mobile,teamName}=req.body;
        let previousReg=await registerModel.findOne({eventName,email});

        if(previousReg!=null){
            res.send({message:'User already registered with this email for this event'});
            return;
        }

        let user=new registerModel({eventName,email,mobile,name,teamName});
        user.save()
        .then(resp=>{
            console.log(resp);
            res.send({message:'User registered'});
        })
        .catch(err=>{
            console.log(err);
            res.send({message:'Server failure'});
        })
    },

    contact:(req,res)=>{
        let {email,name,mobile,message}=req.body;
        let contact=new contactsModel({email,name,mobile,message});

        contact.save()
        .then(resp=>{
            console.log(resp);
            res.send({message:'Your message has been received by us. We will contact you soon.'});
        })
        .catch(err=>{
            console.log(err);
            res.send({message:'Server failure'});
        })
    }
}