const mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true,
    },
    verified:{
        type:Boolean,
        default: false
    },
    verificationToken: String,
    addresses:[
        {
            name:String,        
            street:String, 
            city:String,    
            country:String, 
            postalCode: String          
        }   
    ],
    orders:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Order'        
        }
    ]
}
);
    


module.exports = mongoose.model('User', userSchema);