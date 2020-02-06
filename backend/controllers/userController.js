const mongoose = require('mongoose');
const config =require('../config/db');
mongoose.connect(config.database);
var passport = require('passport');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
const User = mongoose.model('noviKorisnik');

module.exports.register=(req,res,next) =>
{
    var user = new User();
    user.username= req.body.username;
    user.password=req.body.password;
    
    user.save((err,doc)=>{
        if(!err)
        {
            res.send(doc);
        }
        else
        {   if (err.code==11000)
            {
                console.log("Username vec postoji");
            }
            else
            {
                return next(err);
            }
            
        }
    });
}


module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res,next);
}

module.exports.korisnik = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User nije pronadjen' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['username']) });
        }
    );
}