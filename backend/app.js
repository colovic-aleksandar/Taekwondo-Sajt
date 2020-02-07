const path= require('path');
const passport =require('passport');
const placanjeclanoviController = require('./controllers/placanjeclanoviController');
const appRoutes = require('./routes/approutes');
var cors = require('cors');
const details=require('../details.json');
const http = require('http');
const express = require ('express');
const nodemailer=require('nodemailer');
const bodyparser = require ('body-parser');
const mongoose = require('mongoose');
const app = express();
const config= require("../backend/config/db");
const postRoutes= require('./routes/postsroutes');
mongoose.connect(config.database)
.then(()=>{
    console.log("Radi baza!");
})
.catch(()=>{
    console.log("konekcija neuspesna!")
}); 



//body parser


app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
//passport
app.use(passport.initialize( ));
app.use(passport.session());

require('./config/passportConfig')(passport);



app.use("/images",express.static(path.join("backend/images")));
//cors

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader
    (
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
    );
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,PUT,DELETE,OPTIONS');
    next();
})
app.use(cors({origin:"*"}));

//routes
app.get('/users', (req,res) =>{
    res.json(users)
});




app.use('/placanjeclanovi', placanjeclanoviController);

app.use((err,req,res,next) =>{
    if (err.name == 'ValidationError'){
        var valErrors=[];
        Object.keys(err.errors).forEach(key =>valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
    }
});

app.use('/',appRoutes);
app.use('/neplatioci',placanjeclanoviController);

let transporter= nodemailer.createTransport({
    service:'gmail',
    auth:{
        ime:process.env.ime,
        mesec:process.env.mesec,
        napomena:process.env.napomena
    }

});

app.post("/sendemail",(req,res) =>{
   let mail=req.body;
   sendMail(mail,info=>{
       console.log(`poslat mail na ${info.messageId}`);
       res.send(info);
   }); 
});

async function sendMail(mail,callback)
{
    let transporter =nodemailer.createTransport({

        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:details.email,
            password:details.password
        }
    });

    let mailOptions={
        from:"cronije@gmail.com",
        to:mail.email,
        subject:"Nova uplata",
        html:
        `
        <h1>Pozdrav ${user.ime}</h1>
        
        `
    };
    let  info=await transporter.sendMail(mailOptions);
    callback(info);
}


app.use("/api/posts",postRoutes);
module.exports = app;

