const express = require ('express');
var ObjectId=require('mongoose').Types.ObjectId;
var router = express.Router();

var { Clanovi } = require('../models/placanjeclanovi.model');

router.get('/',(req,res) =>{
    Clanovi.find((err,docs) =>{
        if(!err )
        {
            res.send(doc);
        }
        else
        {
            console.log('Error u pronalazenju :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.delete('/:id',(req,res)=>
{
if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`Prazan id: ${req.params.id}`);
    Clanovi.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err )
        {
            res.send(doc);
        }
        else
        {
            console.log('Error u pronalazenju :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.put('/:id',(req,res)=>{
if(!ObjectId.isValid(req.param.id))
    return res.status(400).send(`Prazan id: ${req.param.id}`);

    var nep ={
        _id:req.body._id,
        imeClana: req.body.imeClana,
        januar: req.body.januar,
        februar: req.body.februar,
        mart: req.body.mart,
        april: req.body.april,
        maj: req.body.maj,
        jun: req.body.jun,
        septembar: req.body.septembar,
        oktobar: req.body.oktobar,
        novembar: req.body.novembar,
        decembar: req.body.decembar
    };
    Clanovi.findByIdAndUpdate(req.param.id,{$set:nep},{new:true},(err,doc)=>{
        if (!err)
        {res.send(doc);}
        else{console.log("Problem u cuvanju Neplatioca:" +JSON.stringify(err,undefined,2)); }
    });

});

router.get('/:id',(req,res)=>
{
if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`Prazan id: ${req.params.id}`);
    Clanovi.findById(req.params.id,(err,doc)=>{
        if(!err )
        {
            res.send(doc);
        }
        else
        {
            console.log('Error u pronalazenju :' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.post('/create',(req,res,next) => {
    var nep= new Placanja({
        _id:req.body._id,
        imeClana: req.body.imeClana,
        januar: req.body.januar,
        februar: req.body.februar,
        mart: req.body.mart,
        april: req.body.april,
        maj: req.body.maj,
        jun: req.body.jun,
        septembar: req.body.septembar,
        oktobar: req.body.oktobar,
        novembar: req.body.novembar,
        decembar: req.body.decembar
    });
    nep.save((err,doc)=>{
        if (!err)
        {res.send(doc);}
        else{console.log("Problem u cuvanju Neplatioca:" +JSON.stringify(err,undefined,2)); }
        
    })
});

module.exports=router;