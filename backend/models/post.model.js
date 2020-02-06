const mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    title:
    { 
        type: String,
        required:true,
    },
    content: 
    { 
        type: String,
        required:true,
    },

   
});
mongoose.pluralize(null);

module.exports=mongoose.model('Post',postSchema);