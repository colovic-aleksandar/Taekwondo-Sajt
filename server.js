
const http = require('http');
const port = process.env.PORT || 3000;
const express = require ('express');
const nodemailer=require('nodemailer');
const bodyparser = require ('body-parser');
const mongoose = require('mongoose');
const config= require("./backend/config/db");
mongoose.connect(config.database);
const passport =require('passport');
const placanjeclanoviController = require('./backend/controllers/placanjeclanoviController.js');
const appRoutes = require('./backend/routes/approutes');
var cors = require('cors');

const details=require('./details.json');

mongoose.connection.on('radi',()=>{
    console.log('Radi baza' +config.database)
});


var app =express();

//body parser

app.use(bodyparser());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
//passport
app.use(passport.initialize( ));
app.use(passport.session());

require('./backend/config/passportConfig')(passport);

//cors
app.use(cors({origin:"*"}));

//routes
app.get('/users', (req,res) =>{
    res.json(users)
});

app.set('port', port);
const server = http.createServer(app);


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

server.listen(port);