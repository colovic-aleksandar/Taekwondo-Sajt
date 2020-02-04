const mongoose = require ('mongoose');
const bcrypt = require  ('bcryptjs');
const jwt = require ('jsonwebtoken');
const config =require('../config/db');
mongoose.connect(config.database);

var userSchema = mongoose.Schema({
    username:
    { 
        type: String,
        required:'ne sme biti prazan username',
        unique:true

    
    },
    password: 
    { 
        type: String,
        required:'ne sme biti prazan password',
        minlength:[6,'Password mora imati najmanje 6 karaktera']
    },

    permission: 
    { 
        type: String,
        required:true,
        default:'clan'
    },

    saltSecret:String
   
});


userSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash;
            this.saltSecret=salt;
            next();
        });
    });
});

userSchema.methods.generateJwt=function(){
    return  jwt.sign({_id:this._id},
       process.env.JWT_SECRET );
}
userSchema.methods.verifyPassword = function(password){
    return bcrypt.compareSync(password,this.password);
};
mongoose.pluralize(null);


const User = module.exports = mongoose.model('noviKorisnik',userSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
  }
  
  module.exports.getUserByUsername = function(username, callback){
    const query = {username: username}
    User.findOne(query, callback);
  }
  module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if(err) throw err;
      callback(null, isMatch);
    });
  }