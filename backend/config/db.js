module.exports = {
    database: 'mongodb+srv://colovic:AX4n9Lf0MN1Ou8xm@cluster0-rxoxm.mongodb.net/clanovi?retryWrites=true&w=majority',
    secret: 'AX4n9Lf0MN1Ou8xm'
  }
  
  require('../models/user.model');
  require('../models/placanjeclanovi.model');
// const mongoose = require ('mongoose');

// mongoose.connect(
//     "mongodb+srv://colovic:AX4n9Lf0MN1Ou8xm@cluster0-rxoxm.mongodb.net/clanovi?retryWrites=true&w=majority",
//     {
//         useNewUrlParser:true
//     }, 
//     )
// .then(() =>
// {
//     console.log("Radi baza")
// })
//     .catch(() =>
// {
//     console.log("ne radi baza");
// });


