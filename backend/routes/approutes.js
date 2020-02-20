var express = require('express');
const Placanja=require('../models/placanjeclanovi.model');
var ctrlUser =require('../controllers/userController');
var User = require('../models/user.model');
var passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/db');
var router = express.Router();

router.get('/korisnik',ctrlUser.korisnik);
router.post('/register', ctrlUser.register);

router.post('/authenticate', (req,res,next) => {
    const username = req.body.username;
    const password = req.body.password;
    

    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
          return res.json({success: false, msg: 'User nije pronadjen'});
        }

    
    User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
            const token = jwt.sign({data: user}, config.secret, {
                expiresIn: 604800 // 1 week
         });
  
          res.json({
            success: true,
            token: 'JWT '+token,
            user: {
              id: user._id,
              username: user.username,
              
            }
          });
        } 
        else 
        {
          return res.json({success: false, msg: 'Wrong password'});
        }
      });
    });

});

router.post('/create',(req,res,next) => {
    var noviNeplatioc= new Placanja({
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
    noviNeplatioc.save((err,placanja)=>{
        if (err)
        {res.status(500).json({errmsg:err});}
        else{res.status(200).json({msg:placanja});  }
        
    })
});

router.get('/read',(req,res,next) => {
    Placanja.find({},(err,neplaceni) =>{
        if (err)
        res.status(500).json({errmsg:err});
        res.status(200).json({msg:neplaceni});
    })
  
});

router.put('/update',(req,res,next) => {
   
    Placanja.findById(req.body._id,(err,placanja)=>{
        
        if (err)
        res.status(500).json({errmsg:err});
        placanja.imeClana=req.body.imeClana;   
        placanja.januar=req.body.januar;
        placanja.februar=req.body.februar;
        placanja.mart=req.body.mart;
        placanja.april=req.body.april,
        placanja.maj=req.body.maj,
        placanja.jun=req.body.jun,
        placanja.septembar=req.body.septembar,
        placanja.oktobar=req.body.oktobar,
        placanja.novembar=req.body.novembar,
        placanja.decembar= req.body.decembar
        placanja.save((err,placanja) =>{
            if(err)
            res.status(500).json({errmsg:err});
            res.status(200).json({msg:placanja});

        });
    })
});

router.delete("/delete/:id",(req,res,next) =>
{
    Placanja.deleteOne({_id:req.params.id})
    .then(result=>
        {
            console.log(result);
            res.status(200).json({message:"Post obrisan!"});
        });
    
});

router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({
        user: req.user,
        
    });
  });

module.exports = router;

