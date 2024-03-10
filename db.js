const mongoose = require('mongoose');
const connectToMongo = ()=>{
    mongoose.connect(process.env.MONGO_URL).then (()=>{
        console.log("connected to mongoDB");
    }).catch((error)=>{
        console.log(error);
    });
}
module.exports = connectToMongo;
