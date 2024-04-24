const mongoose = require('mongoose')

const Schema = mongoose.Schema

const onepieceSchema = new Schema ({
    name : {
        type: String,
        required: true
    },
    devilfruit : {
        type: String,
        required: true 
    },
    image : {
        type: String,
        required: true 
    },
    bounty : {
        type: String,
        required: true
    },
    rating : {
        type: Number,
        required: true 
    }
}, {timestamps:true})

module.exports = mongoose.model('onepiece', onepieceSchema)