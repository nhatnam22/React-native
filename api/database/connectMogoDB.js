const mongoose = require('mongoose')


async function connect (){
    await mongoose.connect('mongodb://127.0.0.1:27017/zaloapp',
    {useNewUrlParser : true,
    useUnifiedTopology : true})
    try{
        console.log('connected to mongodb');

    }catch{
        throw new Error("Error connecting to MongoDB")
    }
}
module.exports= {connect}