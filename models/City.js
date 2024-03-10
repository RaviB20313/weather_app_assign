const mongoose = require ('mongoose');
const citySchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    cities: {
        type: [String],
        default: []
    },
});
module.exports =mongoose.model('city',citySchema);