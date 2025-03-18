const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: [{
        name:{
            type: String,
            require: true
        },
        Quantity:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        image:{
            type:String ,
            required: true
        }
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    shippingAddress:{
        type: String,
        required: true
    },
    mobileNo:{
        type: Number,
        required: true
    },
    houseNo:{
        type: Number,
        required: true
    },
    street:{
        type: String,
        required: true
    },
    postalCode:{
        type: String,
        required: true
    },
    paymentMethod:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,     
        default:Date.now() 
    }
});

//Export the model
module.exports = mongoose.model('Order', orderSchema);