const mongoose = require ('mongoose');
const config =require('../config/db');



mongoose.connect(config.database);

var placanje = mongoose.Schema({
    imeClana:{ type: String },
    januar: { type: Number},
    februar: { type: Number},
    mart: { type: Number},
    april: { type: Number},
    maj: { type: Number},
    jun: { type: Number},
    septembar: { type: Number},
    oktobar: { type: Number},
    novembar: { type: Number},
    decembar: { type: Number},
});
mongoose.pluralize(null);

module.exports = mongoose.model('placanje',placanje);

