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

    imagePath: 
    { 
        type: String,
        required:true,
    },
    creator:
    {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }
   
});
mongoose.pluralize(null);

module.exports=mongoose.model('Post',postSchema);